import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Box, MenuItem, Hidden } from '@material-ui/core';
import Icons from 'src/components/Icons';
import Clsx from 'clsx';
import PopoverMenu from './DropDownMenu';
import clsx from 'clsx';
import { setContry } from 'src/redux/slices/orders';
import { useSelector, useDispatch } from 'react-redux';

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  counteryBox: {
    display: 'flex',
    alignItems: 'center',
    background: theme.palette.background.activeMenu,
    borderRadius: 18,
    padding: '13px 20px 13px 15px',
    marginLeft: 10,
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      padding: '3px 5px 3px 5px'
    }
  },
  countryName: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 14,
    marginLeft: 10,
    fontWeight: 400,
    width: '70%',
    [theme.breakpoints.down('md')]: {
      fontSize: 12,
      marginLeft: 5
    }
  },
  countryIcon: {
    marginLeft: 10,
    maxWidth: '100%',
    height: 'auto',
    [theme.breakpoints.down('md')]: {
      height: '10px',
      width: '12px'
    }
  },
  countryLogo: {
    height: 24,
    width: 24,
    [theme.breakpoints.down('md')]: {
      height: '16px',
      width: '18px'
    }
  },
  menuItemRow: {
    width: '108%',
    margin: '2px 0px 0px -8px',
    padding: '15px 15px !important',
    '&:hover': {
      background: theme.palette.background.secondary,
      borderRadius: 10,
      width: '108%'
    }
  },
  menuLabel: {
    width: '100%',
    fontSize: 16,
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontStyle: 'normal',
    fontWeight: 400
  },
  isActive: {
    background: theme.palette.background.secondary,
    borderRadius: 10,
    padding: '15px !important',
    width: '108%'
  }
}));

// ----------------------------------------------------------------------

Country.propTypes = {
  className: PropTypes.string
};

function Country({ outerClass, status }) {
  const classes = useStyles();
  const anchorRef = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { countries, countryDefault } = useSelector((state) => state.orders);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleOptionOnChange = (value) => dispatch(setContry(value));

  return (
    <>
      <Box
        className={Clsx(classes.counteryBox, outerClass)}
        ref={anchorRef}
        onClick={handleOpen}
      >
        <Box
          component="img"
          alt="icon"
          src={countryDefault && countryDefault.flag}
          className={classes.countryLogo}
        />
        {status ? (
          <Box className={classes.countryName}>
            {countryDefault && countryDefault.name}
          </Box>
        ) : (
          <Hidden mdDown>
            <Box className={classes.countryName}>
              {countryDefault && countryDefault.className}
            </Box>
          </Hidden>
        )}

        <Icons
          className={classes.countryIcon}
          url={isOpen ? 'upArrow' : 'downArrowNew'}
        />
      </Box>
      <PopoverMenu
        width={225}
        open={isOpen}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
      >
        {countries &&
          countries.length > 0 &&
          countries.map((option) => (
            <MenuItem
              key={option.name}
              onClick={handleClose}
              className={clsx(
                classes.menuItemRow,
                option && option.id === countryDefault.id && classes.isActive
              )}
            >
              <Box
                className={clsx(classes.menuLabel)}
                onClick={() => handleOptionOnChange(option)}
              >
                {option.name}
              </Box>
              {option && option.id === countryDefault.id && (
                <Icons url={'union'} />
              )}
            </MenuItem>
          ))}
      </PopoverMenu>
    </>
  );
}

export default Country;

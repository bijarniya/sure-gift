import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Box, MenuItem } from '@material-ui/core';
import Icons from 'src/components/Icons';
import Clsx from 'clsx';
import PopoverMenu from './DropDownMenu';
import clsx from 'clsx';

// ----------------------------------------------------------------------
const options = [
  {
    id: 1,
    label: 'English'
  },
  {
    id: 2,
    label: 'Chinese'
  },
  {
    id: 3,
    label: 'French'
  }
];

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  counteryBox: {
    display: 'flex',
    alignItems: 'center',
    background: theme.palette.background.activeMenu,
    borderRadius: 18,
    padding: '13px 20px 13px 15px',
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      padding: '3px 5px 3px 5px',
      marginLeft: 0
    }
  },
  countryName: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 14,
    marginLeft: 10,
    fontWeight: 400,
    width: '81%',
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
    maxWidth: '100%',
    height: 'auto',
    [theme.breakpoints.down('md')]: {
      height: '16px',
      width: '18px'
    }
  },
  enBox: {
    background: theme.palette.background.activeMenu,
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 14,
    borderRadius: 18,
    cursor: 'pointer',
    width: 49,
    height: 49,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: 30,
      height: 30,
      marginTop: '10px'
    }
  },
  menuItemRow: {
    width: '108%',
    margin: '2px 0px 0px -6px',
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

Language.propTypes = {
  className: PropTypes.string
};

function Language({ outerClass, status }) {
  const classes = useStyles();
  const anchorRef = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const [optionDefault, setOptionDefault] = useState(options[0]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOptionOnChange = (value) => {
    setOptionDefault(value);
  };

  return (
    <>
      {status ? (
        <Box
          className={Clsx(classes.counteryBox, outerClass)}
          ref={anchorRef}
          onClick={handleOpen}
        >
          <Box className={classes.countryName}>
            {optionDefault && optionDefault.label}
          </Box>
          <Icons
            className={classes.countryIcon}
            url={isOpen ? 'upArrow' : 'downArrowNew'}
          />
        </Box>
      ) : (
        <Box className={classes.enBox} ref={anchorRef} onClick={handleOpen}>
          {optionDefault && optionDefault.label.substr(0, 2)}
        </Box>
      )}
      <PopoverMenu
        width={200}
        open={isOpen}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
      >
        {options &&
          options.length > 0 &&
          options.map((option) => (
            <MenuItem
              key={option.label}
              onClick={handleClose}
              className={clsx(
                classes.menuItemRow,
                option && option.id === optionDefault.id && classes.isActive
              )}
            >
              <Box
                className={clsx(classes.menuLabel)}
                onClick={() => handleOptionOnChange(option)}
              >
                {option.label}
              </Box>
              {option && option.id === optionDefault.id && (
                <Icons url={'union'} />
              )}
            </MenuItem>
          ))}
      </PopoverMenu>
    </>
  );
}

export default Language;

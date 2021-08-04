import React, { useRef, useState } from 'react';
import PopoverMenu from './DropDownMenu';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Box, MenuItem, Typography, Grid } from '@material-ui/core';
import Icons from 'src/components/Icons';

const useStyles = makeStyles((theme) => ({
  dropDownContainer: {
    display: 'flex',
    alignItems: 'center',
    background: theme.palette.background.main,
    borderRadius: 18
  },
  dropDownOuter: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '0px 25px 0px 25px',
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  catInfo: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    width: '91%'
  },
  titleSection: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 16,
    fontWeight: 400,
    fontStyle: 'normal'
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    margin: '0px -12px 0px -12px'
  },
  categoriesBox: {
    marginLeft: 20,
    width: '75%'
  },
  dropDownContainerInner: {
    width: '100%'
  },
  menuItemRow: {
    width: '108%',
    margin: '2px 0px 0px -12px',
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

OptionsDropDown.propTypes = {
  className: PropTypes.string
};

function OptionsDropDown({
  options,
  optionDefault,
  handleOptionOnChange,
  outerClass,
  upIcon,
  downIcon,
  iconClass,
  titleCls,
  dropDownOuterCls,
  width
}) {
  const classes = useStyles();
  const anchorRef = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid>
      <Box className={outerClass ? outerClass : classes.dropDownContainer}>
        <Box
          ref={anchorRef}
          onClick={handleOpen}
          className={classes.dropDownContainerInner}
        >
          <Box ref={anchorRef} onClick={handleOpen}>
            <Box className={clsx(classes.dropDownOuter, dropDownOuterCls)}>
              <Typography className={clsx(classes.catInfo, titleCls)}>
                {optionDefault && optionDefault.label}
              </Typography>
              <Icons url={isOpen ? upIcon : downIcon} className={iconClass} />
            </Box>
          </Box>
        </Box>
      </Box>

      <PopoverMenu
        width={width ? width : 300}
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
    </Grid>
  );
}

export default OptionsDropDown;

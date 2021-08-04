import React, { useState } from 'react';
import PopoverMenu from 'src/components/Common/DropDownMenu';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Box, MenuItem, Grid, Select } from '@material-ui/core';
import Icons from 'src/components/Icons';

// --------------------------------------------------------------------
const fontFamilyOptions = ['Cookie', 'Arial', 'Verdana', 'Fearless'];
// --------------------------------------------------------------------
const regularOptions = ['Regular', 'Italic'];
// --------------------------------------------------------------------
const fontSizrOptions = [9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  fonntFamilyBox: {
    width: 100
  },
  slectBox: {
    width: '100%',
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: '20px',
    '& .MuiSelect-icon': {
      color: `${theme.palette.text.primary} !important`
    },
    '&:before, &:after': {
      borderBottom: 0,
      '&:hover': {
        borderBottom: 0
      }
    }
  },
  regularBox: {
    width: 100
  },
  centerLine: {
    height: 30,
    border: '1px solid #FFFFFF',
    opacity: 0.2,
    marginLeft: 15,
    marginRight: 13
  },
  fontSizeBox: {
    width: 50
  },
  boldSec: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 800,
    fontSize: 14,
    marginRight: 15,
    cursor: 'pointer'
  },
  italicSec: {
    color: theme.palette.text.primary,
    fontFamily: 'Montserrat Alternates',
    fontStyle: 'italic',
    fontWeight: 400,
    fontSize: 14,
    marginRight: 15,
    cursor: 'pointer'
  },
  underSec: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 800,
    fontSize: 14,
    textDecorationLine: 'underline',
    cursor: 'pointer'
  },
  iconBox: {
    cursor: 'pointer'
  }
}));
// ----------------------------------------------------------------------

EditorToolBar.propTypes = {
  className: PropTypes.string
};

function EditorToolBar({ handleToolBar, isOpen, anchorRef }) {
  const classes = useStyles();
  const [form, setForm] = useState({
    fontFamily: fontFamilyOptions[0],
    regular: 'Regular',
    fontSize: fontSizrOptions[5]
  });

  const handleClose = () => {
    handleToolBar(false);
  };

  const handleOnchange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <PopoverMenu
      width={500}
      height={60}
      open={isOpen}
      onClose={handleClose}
      anchorEl={anchorRef.current}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
    >
      <Grid className={classes.container}>
        <Box className={classes.fonntFamilyBox}>
          <Select
            id="fontDropDown"
            name="fontFamily"
            value={form.fontFamily}
            onChange={handleOnchange}
            defaultValue={form.fontFamily}
            className={classes.slectBox}
            inputProps={{
              classes: {
                root: classes.slectBox
              }
            }}
          >
            {fontFamilyOptions &&
              fontFamilyOptions.length > 0 &&
              fontFamilyOptions.map((ff, index) => {
                return (
                  <MenuItem key={index} style={{ fontFamily: ff }} value={ff}>
                    {ff}
                  </MenuItem>
                );
              })}
          </Select>
        </Box>
        <Box className={classes.centerLine} />
        <Box className={classes.regularBox}>
          <Select
            id="fontDropDown"
            value={form.regular}
            name="regular"
            onChange={handleOnchange}
            defaultValue={form.fontFamily}
            className={classes.slectBox}
            inputProps={{
              classes: {
                root: classes.slectBox
              }
            }}
          >
            {regularOptions &&
              regularOptions.length > 0 &&
              regularOptions.map((ff, index) => {
                return (
                  <MenuItem key={index} value={ff}>
                    {ff}
                  </MenuItem>
                );
              })}
          </Select>
        </Box>
        <Box className={classes.centerLine} />
        <Box className={classes.fontSizeBox}>
          <Select
            id="fontSizeStyle"
            name="fontSize"
            value={form.fontSize}
            defaultValue={form.fontSize}
            onChange={handleOnchange}
            className={classes.slectBox}
            inputProps={{
              classes: {
                root: classes.slectBox
              }
            }}
          >
            {fontSizrOptions &&
              fontSizrOptions.length > 0 &&
              fontSizrOptions.map((ff, index) => {
                return (
                  <MenuItem key={index} value={ff}>
                    {ff}
                  </MenuItem>
                );
              })}
          </Select>
        </Box>
        <Box className={classes.centerLine} />
        <Box className={classes.boldSec}>B</Box>
        <Box className={classes.italicSec}>1</Box>
        <Box className={classes.underSec}>U</Box>
        <Box className={classes.centerLine} />
        <Box className={classes.iconBox}>
          <Icons url={'toolbarIcon'} />
        </Box>
      </Grid>
    </PopoverMenu>
  );
}

export default EditorToolBar;

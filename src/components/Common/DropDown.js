import React, { useRef, useState } from 'react';
import PopoverMenu from './DropDownMenu';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Box, MenuItem, Typography } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
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
    height: 60,
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
  downArrowSec: {
    width: 15,
    height: 10
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
  checkBoxSec: {},
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

const DropDown = ({ options, category, handleDropDown }) => {
  const classes = useStyles();
  const anchorRef = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleCategory = (item) => {
    handleDropDown(item);
    setOpen(false);
  };

  return (
    <>
      <Box className={classes.dropDownContainer}>
        <Box
          ref={anchorRef}
          onClick={handleOpen}
          className={classes.dropDownContainerInner}
        >
          <Box ref={anchorRef} onClick={handleOpen}>
            <Box className={classes.dropDownOuter}>
              <Typography className={classes.catInfo}>
                {category && category.name}
              </Typography>
              <Icons
                url={isOpen ? 'upArrow' : 'downArrowNew'}
                className={classes.downArrowSec}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <PopoverMenu
        width={300}
        open={isOpen}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
      >
        <Box className={classes.row}>
          <Box className={classes.categoriesBox}>
            <Typography className={classes.titleSection}>
              All categories
            </Typography>
          </Box>
          <Box className={classes.checkBoxSec}>
            <FormControl component="fieldset">
              <FormGroup aria-label="position" row>
                <FormControlLabel
                  onClick={() =>
                    handleCategory(
                      category && category.id === 'all'
                        ? { name: 'Category', id: '' }
                        : { name: 'All category', id: 'all' }
                    )
                  }
                  control={
                    <Checkbox
                      color="primary"
                      checked={category && category.id === 'all' ? true : false}
                    />
                  }
                  labelPlacement="start"
                />
              </FormGroup>
            </FormControl>
          </Box>
        </Box>
        {options.map((option, index) => (
          <MenuItem
            key={option.name}
            onClick={() => handleCategory(option)}
            className={clsx(
              classes.menuItemRow,
              category && category.id === option.id && classes.isActive
            )}
          >
            <Box className={clsx(classes.menuLabel)}>{option.name} </Box>
            {category && category.id === option.id ? (
              <Icons url={option.iconName} />
            ) : (
              ''
            )}
          </MenuItem>
        ))}
      </PopoverMenu>
    </>
  );
};
export default DropDown;

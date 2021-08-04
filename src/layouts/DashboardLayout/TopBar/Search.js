import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles, alpha } from '@material-ui/core/styles';
import {
  Input,
  InputAdornment,
  ClickAwayListener
} from '@material-ui/core';
import Icons from 'src/components/Icons';

// ----------------------------------------------------------------------

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const useStyles = makeStyles((theme) => ({
  root: {
  },
  searchBar: {
    top: 0,
    left: 0,
    zIndex: 99,
    width: '100%',
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    height: APPBAR_MOBILE,
    backdropFilter: 'blur(8px)',
    padding: theme.spacing(0, 3),
    boxShadow: theme.shadows[25].z8,
    backgroundColor: `${alpha(theme.palette.background.default, 0.72)}`,
    [theme.breakpoints.up('md')]: {
      height: APPBAR_DESKTOP,
      padding: theme.spacing(0, 5)
    }
  },
  input: {
    marginRight: theme.spacing(1),
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '22px',
    color: 'rgba(255, 255, 255, 0.3)',
    '&::placeholder': {
      color: 'rgba(255, 255, 255, 0.3)'
    }
  },
  iconImage: {
    marginRight: 18,
    marginLeft: 3
  }
}));

// ----------------------------------------------------------------------

Search.propTypes = {
  className: PropTypes.string
};

function Search({ className }) {
  const classes = useStyles();

  const handleClose = () => { };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div className={clsx(classes.root, className)}>
        <Input
          autoFocus
          fullWidth
          disableUnderline
          placeholder="Find"
          startAdornment={
            <InputAdornment position="start">
              <Icons
                className={classes.iconImage}
                url={'search'}
                height={30}
                width={30}
              />
            </InputAdornment>
          }
          className={classes.input}
          inputProps={{
            className: classes.input
          }}
        />
      </div>
    </ClickAwayListener>
  );
}

export default Search;

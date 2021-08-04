import clsx from 'clsx';
import React from 'react';
import Search from './Search';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import Notifications from './Notifications';
import menu2Fill from '@iconify-icons/eva/menu-2-fill';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  AppBar,
  Hidden,
  Toolbar,
  IconButton,
  Divider,
  Grid
} from '@material-ui/core';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 47;

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    boxShadow: 'none',
    backgroundColor: theme.palette.background.main,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: DRAWER_WIDTH
    }
  },
  toolbar: {
    marginTop: 14,
    minHeight: APPBAR_MOBILE,
    [theme.breakpoints.up('md')]: {
      padding: '30px 40px 0px 40px'
    },
    [theme.breakpoints.up('lg')]: {
      minHeight: APPBAR_DESKTOP
    }
  },
  divider: {
    border: '1px solid rgba(255, 255, 255, 0.1)',
    marginTop: 4,
    marginLeft: 4
  },
  searchOuter: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  searchInner: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  }
}));

// ----------------------------------------------------------------------

TopBar.propTypes = {
  onOpenNav: PropTypes.func,
  className: PropTypes.string
};

function TopBar({ onOpenNav, className }) {
  const classes = useStyles();

  return (
    <AppBar className={clsx(classes.root, className)}>
      <Toolbar className={classes.toolbar}>
        <Hidden lgUp>
          <IconButton
            onClick={onOpenNav}
            sx={{
              mr: 1,
              color: 'text.primary'
            }}
          >
            <Icon icon={menu2Fill} />
          </IconButton>
        </Hidden>
        <Grid className={classes.searchOuter}>
          <Grid className={classes.searchInner}>
            <Search />
            <Box sx={{ flexGrow: 1 }} />
            <Notifications />
          </Grid>
          <Divider className={classes.divider} />
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;

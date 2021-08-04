import NavItem from './NavItem';
import MenuLinks from './config';
import PropTypes from 'prop-types';
import LogoWithName from 'src/components/LogoWithName';
import useAuth from 'src/hooks/useAuth';
import React, { useEffect } from 'react';
import Scrollbars from 'src/components/Scrollbars';
import { Link as RouterLink, useLocation, matchPath } from 'react-router-dom';
import { alpha, makeStyles } from '@material-ui/core/styles';
import {
  Box,
  List,
  Drawer,
  Hidden,
  Typography,
  ListSubheader
} from '@material-ui/core';
import Account from './Account';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;

const useStyles = makeStyles((theme) => {
  const isLight = theme.palette.mode === 'light';

  return {
    drawer: {
      [theme.breakpoints.up('lg')]: {
        flexShrink: 0,
        width: DRAWER_WIDTH
      }
    },
    drawerPaper: {
      width: DRAWER_WIDTH,
      background: theme.palette.background.secondary,
      borderRight: 0
    },
    subHeader: {
      ...theme.typography.overline,
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
      paddingLeft: theme.spacing(5),
      color: theme.palette.text.primary
    },
    account: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(2, 2.5),
      borderRadius: theme.shape.borderRadiusSm,
      background: theme.palette.grey[isLight ? 200 : 800]
    },
    doc: {
      padding: theme.spacing(2.5),
      borderRadius: theme.shape.borderRadiusMd,
      backgroundColor: isLight
        ? alpha(theme.palette.primary.main, 0.08)
        : theme.palette.primary.lighter
    },
    logoImage: {
      maxWidth: '100%',
      height: 'auto'
    },
    boxLogo: {
      padding: '40px 10px 0px 45px'
    },
    middleLine: {
      border: '1px solid rgba(255, 255, 255, 0.1)',
      height: '0px',
      margin: '21px 40px -4px 40px'
    },
    profile: {
      display: 'flex',
      alignItems: 'center',
      background: theme.palette.background.secondary,
      padding: '0px 0px 40px 45px'
    },
    welTitle: {
      fontSize: 12,
      color: theme.palette.text.gray,
      fontFamily: theme.palette.font.secondaryFontFamily
    },
    userInfo: {
      fontWeight: 'bold',
      fontSize: 12,
      color: theme.palette.text.primary,
      fontFamily: theme.palette.font.secondaryFontFamily
    }
  };
});

// ----------------------------------------------------------------------

function reduceChild({ array, item, pathname, level }) {
  const key = item.href + level;

  if (item.items) {
    const match = matchPath(pathname, {
      path: item.href,
      exact: false
    });

    array = [
      ...array,
      <NavItem
        key={key}
        level={level}
        icon={item.icon}
        info={item.info}
        href={item.href}
        title={item.title}
        open={Boolean(match)}
      >
        {renderNavItems({
          pathname,
          level: level + 1,
          items: item.items
        })}
      </NavItem>
    ];
  } else {
    array = [
      ...array,
      <NavItem
        key={key}
        level={level}
        href={item.href}
        icon={item.icon}
        info={item.info}
        title={item.title}
      />
    ];
  }
  return array;
}

function renderNavItems({ items, pathname, level = 0 }) {
  return (
    <List disablePadding>
      {items.reduce(
        (array, item) => reduceChild({ array, item, pathname, level }),
        []
      )}
    </List>
  );
}

NavBar.propTypes = {
  onCloseNav: PropTypes.func,
  isOpenNav: PropTypes.bool
};

function NavBar({ isOpenNav, onCloseNav }) {
  const classes = useStyles();
  const { pathname } = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    if (isOpenNav && onCloseNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbars>
      <Box className={classes.boxLogo}>
        <RouterLink to="/">
          <LogoWithName className={classes.logoImage} dashboard />
        </RouterLink>
      </Box>
      <Box sx={{ mb: 4.5 }} />
      {MenuLinks &&
        MenuLinks.primary &&
        MenuLinks.primary.length &&
        MenuLinks.primary.map((list, index) => (
          <List
            disablePadding
            key={index}
            subheader={
              <ListSubheader
                disableSticky
                disableGutters
                className={classes.subHeader}
              >
                {list.subheader}
              </ListSubheader>
            }
          >
            {renderNavItems({
              items: list.items,
              pathname: pathname
            })}
          </List>
        ))}

      <Box className={classes.middleLine} />

      {/*MenuLinks &&
        MenuLinks.secondary &&
        MenuLinks.secondary.length &&
        MenuLinks.secondary.map((list, index) => (
          <List
            disablePadding
            key={index}
            subheader={
              <ListSubheader
                disableSticky
                disableGutters
                className={classes.subHeader}
              >
                {list.subheader}
              </ListSubheader>
            }
          >
            {renderNavItems({
              items: list.items,
              pathname: pathname
            })}
          </List>
          ))*/}
    </Scrollbars>
  );

  const renderProfile = (
    <div className={classes.profile}>
      <Account />
      <Box sx={{ ml: 2 }}>
        <Typography className={classes.welTitle}>Welcome back,</Typography>
        <Typography className={classes.userInfo}>{user.displayName}</Typography>
      </Box>
    </div>
  );

  return (
    <nav className={classes.drawer}>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          open={isOpenNav}
          variant="temporary"
          onClose={onCloseNav}
          classes={{ paper: classes.drawerPaper }}
        >
          {renderContent}
          {renderProfile}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          open
          anchor="left"
          variant="persistent"
          classes={{ paper: classes.drawerPaper }}
        >
          {renderContent}
          {renderProfile}
        </Drawer>
      </Hidden>
    </nav>
  );
}

export default NavBar;

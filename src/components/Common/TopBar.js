import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import { Icon } from '@iconify/react';
import useOffSetTop from 'src/hooks/useOffSetTop';
import homeFill from '@iconify-icons/eva/home-fill';
import PopoverMenu from 'src/components/PopoverMenu';
import roundSpeed from '@iconify-icons/ic/round-speed';
import menu2Fill from '@iconify-icons/eva/menu-2-fill';
import { PATH_HOME } from 'src/routes/paths';
import roundStreetview from '@iconify-icons/ic/round-streetview';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  List,
  Link,
  AppBar,
  Hidden,
  Toolbar,
  MenuItem,
  Container,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core';
import { MIconButton } from 'src/theme';
import Icons from 'src/components/Icons';
import ImagesConfig from 'src/layouts/Common/Images';
import ProfileAvatar from 'src/components/ProfileAvatar';
import EnAndCountry from 'src/components/Common/EnAndCountry';
import AccountDropDown from 'src/components/Common/AccountDropDown';
import SignIn from 'src/components/Common/SignIn';
import useAuth from 'src/hooks/useAuth';
import ErrorAndSuccess from 'src/components/Common/ErrorAndSuccess';
import { getCountries, getCategories } from 'src/redux/slices/orders';
import { useDispatch } from 'react-redux';

// ----------------------------------------------------------------------
const MENU_LINKS = [
  {
    title: 'Hompage',
    icon: homeFill,
    href: PATH_HOME.home
  },
  {
    title: 'Airtime',
    icon: roundStreetview,
    href: PATH_HOME.paybills
  },
  {
    title: 'Pay bills',
    icon: roundSpeed,
    href: PATH_HOME.parWithSureGifts
  },
  {
    title: 'Suregifts business',
    icon: roundSpeed,
    href: PATH_HOME.suregiftsBusiness
  },
  {
    title: 'Merchants',
    icon: roundSpeed,
    href: PATH_HOME.merchantSignUp
  }
];

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 120;

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    boxShadow: 'none',
    backgroundImage: 'none !important'
  },
  toolbar: {
    height: APP_BAR_MOBILE,
    transition: theme.transitions.create(['height', 'background-color'], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.shorter
    }),
    [theme.breakpoints.up('md')]: {
      height: APP_BAR_DESKTOP
    }
  },
  isHome: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: '400 !important',
    fontSize: 14,
    cursor: 'pointer'
  },
  isDesktopActive: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: '400 !important',
    fontSize: 14,
    background: theme.palette.background.activeMenu,
    borderRadius: 18,
    padding: 16,
    cursor: 'pointer'
  },
  isMobileActive: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: '400 !important',
    fontSize: 14
  },
  onScroll: {
    '& $toolbar': {
      background: theme.palette.background.main,
      color: theme.palette.text.primary,
      fontFamily: theme.palette.font.secondaryFontFamily,
      fontWeight: '400 !important',
      fontSize: 14
    },
    '& $isHome': {
      color: theme.palette.text.primary,
      fontFamily: theme.palette.font.secondaryFontFamily,
      fontWeight: '400 !important',
      fontSize: 14
    },
    [theme.breakpoints.up('md')]: {
      '& $toolbar': {
        height: APP_BAR_DESKTOP - 20
      }
    }
  },
  logoImage: {
    maxWidth: '100%',
    height: 'auto'
  },
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  leftBox: {
    display: 'flex',
    width: '16%',
    [theme.breakpoints.down('md')]: {
      width: '50%'
    }
  },
  middleBox: {
    display: 'flex',
    paddingLeft: 40,
    width: '52%',
    [theme.breakpoints.down('md')]: {
      width: '0%'
    }
  },
  rightBox: {
    display: 'flex',
    flexDirection: 'row',
    width: '32%',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
      width: '75%',
      justifyContent: 'flex-end'
    }
  },
  buttonBox: {
    marginLeft: 10
  },
  welOuter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingRight: 17
  },
  welComeTitle: {
    color: theme.palette.text.gray,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 400,
    fontSize: 12,
    [theme.breakpoints.down('md')]: {
      fontSize: 9
    }
  },
  nameSec: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 700,
    fontSize: 14,
    [theme.breakpoints.down('md')]: {
      fontSize: 9
    }
  },
  avtSec: {
    paddingRight: 20,
    cursor: 'pointer'
  },
  avatarCls: {
    height: 50,
    width: 50
  },
  cartSec: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    cursor: 'pointer',
    borderRadius: 18,
    backgroundColor: theme.palette.background.activeMenu,
    height: 50,
    width: 50,
    alignItems: 'center'
  },
  cartIcon: {
    width: 22,
    height: 24
  }
}));

// ----------------------------------------------------------------------

function TopBar() {
  const classes = useStyles();
  const anchorRef = useRef(null);
  const isAnchorRef = useRef(null);
  const { pathname } = useLocation();
  const offset = useOffSetTop(100);
  const [openMenu, setOpenMenu] = useState(false);
  const isHome = pathname === '/';
  const [isAOpen, setIsAOpen] = useState(false);
  const { user, accessToken } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getCategories());
  }, [dispatch]);

  const handleAClose = (status) => {
    setIsAOpen(status);
  };

  const renderMenuDesktop = (
    <div>
      {MENU_LINKS.map((link) => (
        <Link
          exact
          to={link.href}
          key={link.title}
          underline="none"
          variant="subtitle2"
          component={RouterLink}
          activeClassName={classes.isDesktopActive}
          className={clsx({
            [classes.isHome]: isHome
          })}
          sx={{ mr: 5, color: 'text.primary', fontWeight: '400 !important' }}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );

  const renderMenuMobile = (
    <PopoverMenu
      width={220}
      open={openMenu}
      anchorEl={anchorRef.current}
      onClose={() => setOpenMenu(false)}
    >
      <List>
        {MENU_LINKS.map((link) => (
          <MenuItem
            exact
            to={link.href}
            key={link.title}
            component={RouterLink}
            onClick={() => setOpenMenu(false)}
            activeClassName={classes.isMobileActive}
            sx={{ color: 'text.secondary' }}
          >
            <ListItemIcon>
              <Icon icon={link.icon} width={20} height={20} />
            </ListItemIcon>
            <ListItemText>{link.title}</ListItemText>
          </MenuItem>
        ))}
      </List>
    </PopoverMenu>
  );

  return (
    <AppBar
      color="transparent"
      className={clsx(classes.root, { [classes.onScroll]: offset })}
      sx={{ boxShadow: 'none' }}
    >
      <Toolbar disableGutters className={classes.toolbar}>
        <Container maxWidth="lg" className={classes.container}>
          <Box className={classes.leftBox}>
            <RouterLink to="/">
              <Icons className={classes.logoImage} url={'logo'} />
            </RouterLink>
          </Box>

          <Box className={classes.middleBox}>
            <Hidden mdDown>{renderMenuDesktop}</Hidden>
          </Box>
          {accessToken ? (
            <Box className={classes.rightBox}>
              <Hidden mdDown>
                <Box className={classes.welOuter}>
                  <Typography className={classes.welComeTitle}>
                    Welcome back,
                  </Typography>
                  <Typography className={classes.nameSec}>
                    {user && user.firstName} {user && user.lastName}
                  </Typography>
                </Box>
              </Hidden>
              <Box
                className={classes.avtSec}
                onClick={() => handleAClose(true)}
                ref={isAnchorRef}
              >
                <ProfileAvatar
                  avatar={ImagesConfig.profileAvatar}
                  avatarCls={classes.avatarCls}
                />
              </Box>
              <Box className={classes.cartSec}>
                <Icons url={'cart'} className={classes.cartIcon} />
              </Box>
              <AccountDropDown
                isAOpen={isAOpen}
                handleAClose={handleAClose}
                isAnchorRef={isAnchorRef}
              />
              <Hidden mdUp>
                <MIconButton
                  ref={anchorRef}
                  onClick={() => setOpenMenu(true)}
                  className={clsx({
                    [classes.isHome]: isHome
                  })}
                >
                  <Icon icon={menu2Fill} />
                </MIconButton>
                {renderMenuMobile}
              </Hidden>
            </Box>
          ) : (
            <Box className={classes.rightBox}>
              <EnAndCountry />
              <SignIn />
              <Hidden mdUp>
                <MIconButton
                  ref={anchorRef}
                  onClick={() => setOpenMenu(true)}
                  className={clsx({
                    [classes.isHome]: isHome
                  })}
                >
                  <Icon icon={menu2Fill} />
                </MIconButton>
                {renderMenuMobile}
              </Hidden>
            </Box>
          )}
        </Container>
      </Toolbar>
      {offset && (
        <Box
          sx={{
            left: 0,
            right: 0,
            bottom: 0,
            height: 24,
            zIndex: -1,
            margin: 'auto',
            borderRadius: '50%',
            position: 'absolute',
            width: `calc(100% - 48px)`,
            boxShadow: (theme) => theme.shadows[25].z8
          }}
        />
      )}
      <ErrorAndSuccess />
    </AppBar>
  );
}

export default TopBar;

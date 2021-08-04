import React from 'react';
import PopoverMenu from 'src/components/PopoverMenu';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Divider, MenuItem, Typography } from '@material-ui/core';
import useAuth from 'src/hooks/useAuth';

// ------------------------------------------------------
const MENU_OPTIONS = [
  {
    label: 'My Account',
    linkTo: '/account/overview'
  },
  {
    label: 'Orders Histry',
    linkTo: '/account/my/orders'
  },
  {
    label: 'My Vouchers',
    linkTo: '/account/my/vouchers'
  }
];

// ----------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  containerInner: {
    margin: 15
  },
  logoutContainer: {
    margin: '0px 10px 25px 10px'
  },
  menuTitle: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 400,
    fontSize: 16,
    cursor: 'pointer'
  }
}));

// ----------------------------------------------------------------------
function AccountDropDown({ isAOpen, handleAClose, isAnchorRef }) {
  const classes = useStyles();
  const { logout } = useAuth();

  const handleLogout = () => {
    handleAClose(false);
    logout();
  };

  return (
    <>
      <PopoverMenu
        width={220}
        open={isAOpen}
        onClose={() => handleAClose(false)}
        anchorEl={isAnchorRef.current}
      >
        <Grid className={classes.containerInner}>
          {MENU_OPTIONS &&
            MENU_OPTIONS.length > 0 &&
            MENU_OPTIONS.map((option) => (
              <MenuItem
                key={option.label}
                to={option.linkTo}
                component={RouterLink}
                onClick={() => handleAClose(false)}
                className={classes.menuTitle}
              >
                <Box icon={option.icon} />
                {option.label}
              </MenuItem>
            ))}
          <Box className={classes.logoutContainer}>
            ​<Divider />
            <Typography
              className={classes.menuTitle}
              style={{ color: '#FF4F6E', marginTop: 10 }}
              onClick={handleLogout}
            >
              Logout
            </Typography>
          </Box>
        </Grid>
      </PopoverMenu>
    </>
  );
}

export default AccountDropDown;

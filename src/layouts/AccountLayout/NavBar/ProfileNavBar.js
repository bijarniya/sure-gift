import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Hidden, Box, Typography } from '@material-ui/core';
import ImagesConfig from 'src/layouts/Common/Images';
import ProfileAvatar from 'src/components/ProfileAvatar';
import Icons from 'src/components/Icons';
import useAuth from 'src/hooks/useAuth';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  profileImg: {
    width: 70,
    height: 70
  },
  pOuter: {
    marginLeft: 17
  },
  welComeTitle: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 700,
    fontSize: 18
  },
  logoutOuter: {
    display: 'flex',
    marginTop: '12.31px',
    cursor: 'pointer'
  },
  logout: {
    color: theme.palette.text.gray,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 400,
    fontSize: 14,
    marginLeft: 6
  }
}));

function ProfileNavBar() {
  const classes = useStyles();
  const { user, logout } = useAuth();

  return (
    <Grid container>
      <Hidden mdDown>
        <Grid item xs={12} md={12} className={classes.root}>
          <ProfileAvatar
            avatar={ImagesConfig.profileAvatar}
            avatarCls={classes.profileImg}
          />
          <Box className={classes.pOuter}>
            <Typography className={classes.welComeTitle}>
              {user && user.firstName} {user && user.lastName}
            </Typography>
            <Box className={classes.logoutOuter} onClick={logout}>
              <Icons url={'logout'} />
              <Typography className={classes.logout}>Logout</Typography>
            </Box>
          </Box>
        </Grid>
      </Hidden>
    </Grid>
  );
}

export default ProfileNavBar;

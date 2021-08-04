import React, { useEffect } from 'react';
import Page from 'src/components/Page';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ProfilePicture from './ProfilePicture';
import ProfileInformation from './ProfileInformation';
import PasswordSettings from './PasswordSettings';
import RedemptionPin from './RedemptionPin';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from 'src/redux/slices/user';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {},
  middleContainer: {
    background: theme.palette.background.secondary,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 30,
    marginTop: 40,
    padding: '40px 50px 40px 50px',
    [theme.breakpoints.down('sm')]: {
      padding: '30px 15px 30px 15px'
    }
  }
}));

function AccountSettings() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { myProfile } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <Page title="Account Settings" id="move_top" className={classes.root}>
      <Grid className={classes.content}>
        <ProfilePicture />
        <Grid className={classes.middleContainer}>
          <ProfileInformation
            profile={(myProfile && myProfile.profileInfo) || {}}
          />
          <PasswordSettings />
          <RedemptionPin />
        </Grid>
      </Grid>
    </Page>
  );
}
export default AccountSettings;

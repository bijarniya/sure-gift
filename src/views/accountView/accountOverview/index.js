import React, { useEffect } from 'react';
import moment from 'moment';
import Page from 'src/components/Page';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography } from '@material-ui/core';
import Icons from 'src/components/Icons';
import InfoWidget from 'src/components/Common/InfoWidget';
import UserInfo from './UserInfo';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, sendVerifyEmailCode } from 'src/redux/slices/user';

// --------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  topContainer: {
    background: theme.palette.background.secondary,
    borderRadius: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 30px 42px 30px'
  },
  letBox: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column'
  },
  rightBox: {
    width: '50%',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  topDate: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.gray,
    fontSize: 14,
    fontWeight: 400,
    [theme.breakpoints.down('sm')]: {
      fontSize: 11
    }
  },
  topHeading: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontSize: 24,
    fontWeight: 700,
    marginTop: 10,
    [theme.breakpoints.down('sm')]: {
      fontSize: 13
    }
  },
  rightInfo: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 32,
    [theme.breakpoints.down('sm')]: {
      marginRight: 12
    }
  },
  iconOuter: {
    width: 60,
    height: 60,
    borderRadius: 18,
    background: `conic-gradient(${theme.palette.background.conic})`,
    padding: 5,
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      width: 50,
      height: 50
    }
  },
  iconInner: {
    background: `conic-gradient(${theme.palette.background.conic})`,
    border: `2px solid ${theme.palette.text.dark}`,
    borderRadius: 18,
    height: '100%',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center'
  },
  iconTop: {
    [theme.breakpoints.down('sm')]: {
      height: 20
    }
  },
  widgetsSec: {
    marginTop: 20
  }
}));

function AccountOverview() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { myProfile } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const handleSendVerifyCode = () => {
    dispatch(sendVerifyEmailCode());
  };

  return (
    <Page title="Account Overview" id="move_top" className={classes.root}>
      <Grid className={classes.topContainer}>
        <Box className={classes.letBox}>
          <Typography className={classes.topDate}>
            {moment(new Date()).format('dddd,  DD MMM YYYY')}
          </Typography>
          <Typography className={classes.topHeading}>
            Good Morning,{' '}
            {myProfile &&
              myProfile.profileInfo &&
              myProfile.profileInfo.firstName}{' '}
            {myProfile &&
              myProfile.profileInfo &&
              myProfile.profileInfo.lastName}
          </Typography>
        </Box>
        <Box className={classes.rightBox}>
          <Box className={classes.rightInfo}>
            <Typography className={classes.topDate}>Wallet Balance:</Typography>
            <Typography className={classes.topHeading}>
              $ {myProfile && myProfile.walletBalance}
            </Typography>
          </Box>
        </Box>
        <Box className={classes.iconOuter}>
          <Box className={classes.iconInner}>
            <Icons url={'subtractRect'} className={classes.iconTop} />
          </Box>
        </Box>
      </Grid>
      <Grid container spacing={3} className={classes.widgetsSec}>
        <Grid item xs={12} md={4}>
          <InfoWidget
            item={{
              icon: 'delivery',
              total: `${myProfile && myProfile.totalOrders} Total orders`,
              title: 'Orders'
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <InfoWidget
            item={{
              icon: 'contacts',
              total: `${myProfile && myProfile.contacts} Contacts added`,
              title: 'Contacts'
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <InfoWidget
            item={{
              icon: 'voucherAV',
              total: `${
                (myProfile &&
                  myProfile.profileInfo &&
                  myProfile.profileInfo.currencySymbol) ||
                ''
              } ${myProfile && myProfile.vouchers} Total value`,
              title: 'Vouchers'
            }}
          />
        </Grid>
      </Grid>
      <UserInfo
        pInfo={myProfile && myProfile.profileInfo}
        orderHistory={myProfile && myProfile.orderHistory}
        handleSendVerifyCode={handleSendVerifyCode}
      />
    </Page>
  );
}
export default AccountOverview;

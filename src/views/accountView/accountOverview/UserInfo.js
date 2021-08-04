import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography } from '@material-ui/core';
import Icons from 'src/components/Icons';
import ButtonLoading from 'src/components/Common/ButtonLoading';
import ImagesConfig from 'src/layouts/Common/Images';
import ProfileAvatar from 'src/components/ProfileAvatar';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';
import { PATH_ACCOUNT } from 'src/routes/paths';

// --------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.secondary,
    borderRadius: 30,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    [theme.breakpoints.down('sm')]: {
      padding: '40px 0px 42px 0px',
      flexDirection: 'column'
    }
  },
  letBox: {
    width: '49.4%',
    display: 'flex',
    flexDirection: 'column',
    padding: '30px 30px 40px 30px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '30px 15px 40px 15px'
    }
  },
  strateLine: {
    border: `2px solid ${theme.palette.background.main}`,
    height: '100% !important',
    width: '0.2%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  rightBox: {
    width: '49.4%',
    display: 'flex',
    flexDirection: 'column',
    padding: '30px 30px 40px 40px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '30px 15px 40px 15px'
    }
  },
  historySec: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 5,
    marginBottom: 10
  },
  rightHeading: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontSize: 18,
    fontWeight: 400,
    width: '90%'
  },
  buttonOuter: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.palette.background.main,
    borderRadius: 20,
    padding: 0,
    width: 120,
    [theme.breakpoints.down('md')]: {
      width: 120
    }
  },
  buttonInner: {
    backgroundColor: theme.palette.background.main,
    border: `0px solid ${theme.palette.text.dark}`,
    color: theme.palette.text.primay,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 14,
    boxShadow: 'none',
    borderRadius: 18,
    fontWeight: 400,
    margin: 0,
    padding: '16.5px 0px 16.5px 0px',
    '&:hover': {
      backgroundColor: theme.palette.text.dark,
      boxShadow: 'none',
      borderRadius: 17
    },
    [theme.breakpoints.down('md')]: {
      padding: '0px 0px'
    }
  },
  contentBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 30
  },
  contentLeft: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%'
  },
  contentRightInner: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%'
  },
  contentRight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    width: '40%'
  },
  toDate: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.gray,
    fontSize: 14,
    fontWeight: 400,
    [theme.breakpoints.down('sm')]: {
      fontSize: 11
    }
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
  toId: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontSize: 18,
    fontWeight: 400,
    marginTop: 7,
    [theme.breakpoints.down('sm')]: {
      fontSize: 14
    }
  },
  toAmount: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontSize: 18,
    fontWeight: 400,
    [theme.breakpoints.down('sm')]: {
      fontSize: 14
    }
  },
  buttonOuterEdit: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.palette.background.main,
    borderRadius: 20,
    padding: 0,
    width: 100,
    [theme.breakpoints.down('md')]: {
      width: 100
    }
  },
  buttonInnerEdit: {
    backgroundColor: theme.palette.background.main,
    border: `0px solid ${theme.palette.text.dark}`,
    color: theme.palette.text.primay,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 14,
    boxShadow: 'none',
    borderRadius: 18,
    fontWeight: 400,
    margin: 0,
    padding: '16.5px 0px 16.5px 0px',
    '&:hover': {
      backgroundColor: theme.palette.text.dark,
      boxShadow: 'none',
      borderRadius: 17
    },
    [theme.breakpoints.down('md')]: {
      padding: '0px 0px'
    }
  },
  leftTop: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
  },
  infoContent: {
    display: 'flex',
    flexDirection: 'row',
    width: '75%'
  },
  pInfo: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 15
  },
  buttonOuterNot: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#FF4F6E',
    borderRadius: 8,
    padding: 0,
    marginTop: 8,
    width: 85,
    [theme.breakpoints.down('md')]: {
      width: 85
    }
  },
  buttonInnerNot: {
    backgroundColor: '#FF4F6E',
    border: `0px solid ${theme.palette.text.dark}`,
    color: theme.palette.text.primay,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 10,
    borderRadius: 7,
    fontWeight: 400,
    textTransform: 'uppercase',
    boxShadow: 'none',
    margin: 0,
    height: 28,
    padding: '8px 0px 8px 0px',
    '&:hover': {
      backgroundColor: '#FF4F6E',
      boxShadow: 'none',
      borderRadius: 7
    },
    [theme.breakpoints.down('md')]: {
      padding: '0px 0px'
    }
  },
  buttonOuterVerified: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#92FBB3',
    borderRadius: 8,
    padding: 0,
    marginTop: 8,
    width: 85,
    [theme.breakpoints.down('md')]: {
      width: 85
    }
  },
  buttonInnerVerified: {
    backgroundColor: '#92FBB3',
    border: `0px solid ${theme.palette.text.dark}`,
    color: theme.palette.text.primay,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 10,
    borderRadius: 7,
    fontWeight: 400,
    textTransform: 'uppercase',
    boxShadow: 'none',
    margin: 0,
    height: 28,
    padding: '8px 0px 8px 0px',
    '&:hover': {
      backgroundColor: '#92FBB3',
      boxShadow: 'none',
      borderRadius: 7
    },
    [theme.breakpoints.down('md')]: {
      padding: '0px 0px'
    }
  },
  avatarCls: {
    width: 60,
    height: 60
  },
  leftContentBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: 30
  },
  emailContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  statusIcon: {
    marginTop: 10,
    marginRight: 4
  },
  iconSec: {
    width: 20,
    height: 20
  }
}));

function UserInfo({ pInfo, orderHistory, handleSendVerifyCode }) {
  const classes = useStyles();
  const history = useHistory();

  const handleButton = (url) => {
    history.push(url);
  };

  return (
    <Grid container>
      <Grid item xs={12} className={classes.root}>
        <Grid className={classes.letBox}>
          <Box className={classes.leftTop}>
            <Box className={classes.infoContent}>
              <ProfileAvatar
                avatar={ImagesConfig.profileAvatar}
                avatarCls={classes.avatarCls}
              />
              <Box className={classes.pInfo}>
                <Typography className={classes.toAmount}>
                  {pInfo && pInfo.firstName} {pInfo && pInfo.lastName}
                </Typography>
                {pInfo && pInfo.isVerified ? (
                  <ButtonLoading
                    title={'Verified'}
                    container={classes.buttonOuterVerified}
                    buttonClass={classes.buttonInnerVerified}
                  />
                ) : (
                  <ButtonLoading
                    title={'Not verified'}
                    container={classes.buttonOuterNot}
                    buttonClass={classes.buttonInnerNot}
                  />
                )}
              </Box>
            </Box>
            <ButtonLoading
              title={'Edit'}
              container={classes.buttonOuterEdit}
              buttonClass={classes.buttonInnerEdit}
              handleClick={() => handleButton(PATH_ACCOUNT.accountSettings)}
            />
          </Box>
          <Box className={classes.leftContentBox}>
            <Typography className={classes.toDate}>Email</Typography>
            <Box className={classes.emailContent}>
              <Box className={classes.contentLeft}>
                <Typography className={classes.toId}>
                  {pInfo && pInfo.email}
                </Typography>
              </Box>
              <Box className={classes.contentRight}>
                <Icons
                  url={
                    pInfo && !pInfo.emailConfirmed
                      ? 'closeChckMark'
                      : 'successCheck'
                  }
                  className={clsx(classes.statusIcon, classes.iconSec)}
                />
              </Box>
            </Box>
            {pInfo && !pInfo.emailConfirmed && (
              <Typography
                className={classes.toDate}
                style={{ color: '#92FBB3', marginTop: 7, cursor: 'pointer' }}
                onClick={handleSendVerifyCode}
              >
                Verify now
              </Typography>
            )}
          </Box>
          <Box className={classes.leftContentBox}>
            <Typography className={classes.toDate}>Phone</Typography>
            <Box className={classes.emailContent}>
              <Box className={classes.contentLeft}>
                <Typography className={classes.toId}>
                  {pInfo && pInfo.phoneNumber}
                </Typography>
              </Box>
              <Box className={classes.contentRight}>
                <Icons
                  url={
                    pInfo && !pInfo.phoneNumberConfirmed
                      ? 'closeChckMark'
                      : 'successCheck'
                  }
                  className={clsx(classes.statusIcon, classes.iconSec)}
                />
              </Box>
            </Box>
            {pInfo && !pInfo.phoneNumberConfirmed && (
              <Typography
                className={classes.toDate}
                style={{ color: '#92FBB3', marginTop: 7, cursor: 'pointer' }}
              >
                Verify now
              </Typography>
            )}
          </Box>
          <Box className={classes.leftContentBox}>
            <Typography className={classes.toDate}>Address</Typography>
            <Box className={classes.emailContent}>
              <Box className={classes.contentLeft}>
                <Typography className={classes.toId}>
                  {pInfo && pInfo.address}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid className={classes.strateLine}></Grid>
        <Grid className={classes.rightBox}>
          <Box className={classes.historySec}>
            <Typography className={classes.rightHeading}>
              Order History
            </Typography>
            <ButtonLoading
              title={'View all'}
              container={classes.buttonOuter}
              buttonClass={classes.buttonInner}
              handleClick={() => handleButton(PATH_ACCOUNT.myOrders)}
            />
          </Box>
          {orderHistory &&
            orderHistory.length > 0 &&
            orderHistory.map((item, index) => (
              <Box className={classes.contentBox} key={index}>
                <Box className={classes.contentRightInner}>
                  <Typography className={classes.toDate}>
                    {moment(item.dateCreated).calendar()}
                  </Typography>
                  <Typography className={classes.toId}>
                    ID {item.orderNumber}
                  </Typography>
                </Box>
                <Box className={classes.contentRight}>
                  <Typography className={classes.toAmount}>
                    {item.amount}
                  </Typography>
                </Box>
              </Box>
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
export default UserInfo;

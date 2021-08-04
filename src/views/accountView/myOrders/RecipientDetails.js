import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import Icons from 'src/components/Icons';
import ImagesConfig from 'src/layouts/Common/Images';
import { useHistory } from 'react-router-dom';
import { PATH_ACCOUNT } from 'src/routes/paths';

// --------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.secondary,
    borderRadius: 30,
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      padding: '40px 0px 42px 0px',
      flexDirection: 'column'
    }
  },
  rightBox: {
    width: '49.4%',
    display: 'flex',
    flexDirection: 'column',
    padding: '40px 50px 50px 40px',
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
    marginBottom: 10,
    padding: '0px 17.5%',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 12.5%'
    }
  },
  contentBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 30
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
  rightHeading: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.gray,
    fontSize: 14,
    fontWeight: 400,
    [theme.breakpoints.down('sm')]: {
      fontSize: 11
    }
  },
  rightTitle: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontSize: 16,
    fontWeight: 400,
    marginTop: 7,
    [theme.breakpoints.down('sm')]: {
      fontSize: 14
    }
  },
  imgBox: {
    width: '100%',
    height: '140px',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'baseline',
    paddingRight: 25,
    paddingTop: 18
  },
  strateLine: {
    border: `2px solid ${theme.palette.background.main}`,
    height: '100% !important',
    width: '0.2%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  letBox: {
    width: '49.4%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  leftTop: {
    paddingTop: '25px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '0px'
    }
  },
  buttonBox: {
    marginLeft: '-30.5px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    }
  },
  buttonSec: {
    background: theme.palette.background.activeMenu,
    borderRadius: 14,
    width: 50,
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'none',
    '&:hover': {
      background: theme.palette.background.activeMenu,
      boxShadow: 'none'
    }
  },
  iconSec: {
    width: 30,
    height: 30
  },
  recHeading: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontSize: 24,
    fontWeight: 700,
    marginLeft: 24,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16
    }
  },
  leftMiddle: {
    display: 'flex',
    flexDirection: 'column',
    padding: '14px 30px 50px 30px',
    [theme.breakpoints.down('sm')]: {
      padding: '14px 15px 50px 15px'
    }
  },
  middleTop: {
    background: theme.palette.background.activeMenu,
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    borderRadius: 20,
    [theme.breakpoints.down('sm')]: {
      padding: 20
    }
  },
  leftContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%'
  },
  leftRightContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '40%'
  },
  nameSec: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontSize: 16,
    fontWeight: 400,
    [theme.breakpoints.down('sm')]: {
      fontSize: 14
    }
  },
  idSec: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.gray,
    fontSize: 12,
    fontWeight: 400,
    marginRop: 6
  },
  leftBottom: {
    display: 'flex',
    flexDirection: 'row',
    padding: '25px 20px 20px 20px',
    borderRadius: 20,
    [theme.breakpoints.down('sm')]: {
      padding: '25px 20px 20px 20px'
    }
  }
}));

function RecipientDetails() {
  const classes = useStyles();
  const history = useHistory();

  const handleButton = () => {
    history.push(PATH_ACCOUNT.myOrders);
  };

  return (
    <Grid container>
      <Grid item xs={12} className={classes.root}>
        <Grid className={classes.letBox}>
          <Box className={classes.leftTop}>
            <Box className={classes.buttonBox}>
              <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                className={classes.buttonSec}
                onClick={handleButton}
              >
                <Icons url={'leftArroWhite'} className={classes.iconSec} />
              </LoadingButton>{' '}
            </Box>
            <Box className={classes.recHeading}>Recipient</Box>
          </Box>
          <Box className={classes.leftMiddle}>
            <Box className={classes.middleTop}>
              <Box className={classes.leftContent}>
                <Typography className={classes.nameSec}>
                  John Anisera
                </Typography>
                <Typography className={classes.idSec}>id- #2345123</Typography>
              </Box>
              <Box className={classes.leftRightContent}>
                <Typography className={classes.nameSec}>N 20,000</Typography>
                <Typography className={classes.idSec}>
                  Today, 10:33 am
                </Typography>
              </Box>
            </Box>

            <Box className={classes.leftBottom}>
              <Box className={classes.leftContent}>
                <Typography className={classes.nameSec}>
                  John Anisera
                </Typography>
                <Typography className={classes.idSec}>id- #2345123</Typography>
              </Box>
              <Box className={classes.leftRightContent}>
                <Typography className={classes.nameSec}>N 20,000</Typography>
                <Typography className={classes.idSec}>
                  Today, 10:33 am
                </Typography>
              </Box>
            </Box>

            <Box className={classes.leftBottom}>
              <Box className={classes.leftContent}>
                <Typography className={classes.nameSec}>
                  John Anisera
                </Typography>
                <Typography className={classes.idSec}>id- #2345123</Typography>
              </Box>
              <Box className={classes.leftRightContent}>
                <Typography className={classes.nameSec}>N 20,000</Typography>
                <Typography className={classes.idSec}>
                  Today, 10:33 am
                </Typography>
              </Box>
            </Box>

            <Box className={classes.leftBottom}>
              <Box className={classes.leftContent}>
                <Typography className={classes.nameSec}>
                  John Anisera
                </Typography>
                <Typography className={classes.idSec}>id- #2345123</Typography>
              </Box>
              <Box className={classes.leftRightContent}>
                <Typography className={classes.nameSec}>N 20,000</Typography>
                <Typography className={classes.idSec}>
                  Today, 10:33 am
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid className={classes.strateLine}></Grid>

        <Grid className={classes.rightBox}>
          <Box className={classes.historySec}>
            <Box
              style={{ backgroundImage: `url(${ImagesConfig.full97})` }}
              className={classes.imgBox}
            >
              <Icons url={'amazonIcon'} />
            </Box>
          </Box>

          <Box className={classes.contentBox}>
            <Box className={classes.contentRightInner}>
              <Typography className={classes.rightHeading}>
                Recipient name
              </Typography>
              <Typography className={classes.rightTitle}>
                John Anisera
              </Typography>
            </Box>
            <Box className={classes.contentRight}>
              <Typography className={classes.rightHeading}>
                Recipient phone
              </Typography>
              <Typography className={classes.rightTitle}>
                eceipient phone
              </Typography>
            </Box>
          </Box>

          <Box className={classes.contentBox}>
            <Box className={classes.contentRightInner}>
              <Typography className={classes.rightHeading}>
                Recipient email
              </Typography>
              <Typography className={classes.rightTitle}>
                johnanisera@gmail.com
              </Typography>
            </Box>
          </Box>

          <Box className={classes.contentBox}>
            <Box className={classes.contentRightInner}>
              <Typography className={classes.rightHeading}>Price</Typography>
              <Typography className={classes.rightTitle}>N 20,000</Typography>
            </Box>
            <Box className={classes.contentRight}>
              <Typography className={classes.rightHeading}>
                Delivery type
              </Typography>
              <Typography className={classes.rightTitle}>Email</Typography>
            </Box>
          </Box>

          <Box className={classes.contentBox}>
            <Box className={classes.contentRightInner}>
              <Typography className={classes.rightHeading}>
                Gift card
              </Typography>
              <Typography className={classes.rightTitle}>
                SureGifts Generic
              </Typography>
            </Box>
            <Box className={classes.contentRight}>
              <Typography className={classes.rightHeading}>
                Order Status
              </Typography>
              <Typography className={classes.rightTitle}>Delivered</Typography>
            </Box>
          </Box>

          <Box className={classes.contentBox}>
            <Box
              className={classes.contentRightInner}
              style={{ width: '100%' }}
            >
              <Typography className={classes.rightHeading}>
                Personal message
              </Typography>
              <Typography className={classes.rightTitle}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default RecipientDetails;

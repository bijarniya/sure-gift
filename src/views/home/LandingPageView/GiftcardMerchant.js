import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Icons from 'src/components/Icons';
import ImagesConfig from 'src/layouts/Common/Images';
import { Typography, Grid, Box } from '@material-ui/core';
import {
  varFadeInUp,
  varFadeInLeft,
  MotionInView
} from 'src/components/Animate';
import { useHistory } from 'react-router-dom';
import { PATH_HOME } from 'src/routes/paths';
import ButtonLoading from 'src/components/Common/ButtonLoading';
// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 200,
    [theme.breakpoints.between('sm', 'md')]: {
      flexDirection: 'row'
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: '0px 20px'
    }
  },
  leftBox: {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.between('sm', 'md')]: {
      width: '60%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      alignItems: 'center'
    }
  },
  topSec: {
    width: '80%',
    [theme.breakpoints.between('sm', 'md')]: {
      width: '100%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      textAlign: 'center',
      margin: '0% 10% 0% 10%'
    }
  },
  heading: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 64,
    fontWeight: 700,
    lineHeight: '110%',
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 33
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 23
    }
  },
  topHalf: {
    width: '70%',
    [theme.breakpoints.between('sm', 'md')]: {
      width: '100%'
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      display: 'none'
    }
  },
  discription: {
    width: '95%',
    color: theme.palette.text.gray,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 18,
    fontWeight: 400,
    lineHeight: '160%',
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 14,
      marginTop: '15px'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
      textAlign: 'center',
      marginTop: '15px'
    }
  },
  leftInnerBox: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.between('sm', 'md')]: {
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  prefectButton: {
    marginTop: 11
  },
  inNTSec: {
    display: 'block',
    [theme.breakpoints.between('sm', 'md')]: {
      display: 'block'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  inNSec: {
    display: 'none',
    [theme.breakpoints.between('sm', 'md')]: {
      display: 'none'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  },
  buttonOuter: {
    display: 'flex',
    flexDirection: 'row',
    background: `conic-gradient(${theme.palette.background.conic})`,
    borderRadius: 18,
    padding: 1,
    width: 270,
    [theme.breakpoints.between('sm', 'md')]: {
      width: 270,
      marginTop: '15px'
    },
    [theme.breakpoints.down('sm')]: {
      width: 270,
      marginTop: '15px'
    }
  },
  buttonInner: {
    background: `conic-gradient(${theme.palette.background.conic})`,
    border: `2px solid ${theme.palette.text.dark}`,
    color: theme.palette.text.dark,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 18,
    boxShadow: 'none',
    borderRadius: 18,
    fontWeight: 700,
    margin: 1,
    padding: '29px 0px 29px 0px',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: theme.palette.text.dark,
      boxShadow: 'none',
      borderRadius: 18
    },
    [theme.breakpoints.down('md')]: {
      padding: '0px 0px'
    }
  },
  rightBox: {
    width: '40%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.between('sm', 'md')]: {
      width: '40%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginTop: 30
    }
  },
  rightInner: {
    backgroundImage: `url(${ImagesConfig.danush})`,
    backgroundRepeat: 'no-repeat !important',
    width: 295,
    height: 320
  },
  iconImages: {
    height: 18,
    width: 18,
    marginTop: '50%',
    marginLeft: '41%',
    [theme.breakpoints.between('sm', 'md')]: {
      height: 18,
      width: 18,
      marginTop: '67%',
      marginLeft: '55%'
    }
  }
}));

// ----------------------------------------------------------------------

GiftcardMerchant.propTypes = {
  className: PropTypes.string
};

function GiftcardMerchant() {
  const classes = useStyles();
  const history = useHistory();

  const handleButton = () => {
    history.push(PATH_HOME.giftcard);
  };

  return (
    <Grid item xs={12} lg={12} id="giftCards" className={classes.root}>
      <Grid className={classes.leftBox}>
        <MotionInView variants={varFadeInLeft}>
          <Typography
            className={clsx(classes.topSec, classes.heading, classes.inNTSec)}
          >
            Gift Cards from over 200 merchants
          </Typography>
          <Typography
            className={clsx(classes.topSec, classes.heading, classes.inNSec)}
          >
            Gift Cards from over 200 merchants in Nigeria
          </Typography>
          <Grid className={classes.leftInnerBox}>
            <Typography className={clsx(classes.topHalf, classes.heading)}>
              in Nigeria
            </Typography>
            <Typography className={classes.discription}>
              They will try to close the door on you, just open it. They don’t
              want us to win. The key to more success is ti get a massage once a
              week, very important
            </Typography>
          </Grid>
        </MotionInView>
        <Box className={classes.prefectButton}>
          <MotionInView variants={varFadeInUp}>
            <ButtonLoading
              title={'Buy a Gift Card'}
              container={classes.buttonOuter}
              buttonClass={classes.buttonInner}
              handleClick={handleButton}
            />
          </MotionInView>
        </Box>
      </Grid>
      <Grid className={classes.rightBox}>
        <Box className={classes.rightInner}>
          <Icons url={'dotIcon'} className={classes.iconImages} />
        </Box>
      </Grid>
    </Grid>
  );
}
export default GiftcardMerchant;

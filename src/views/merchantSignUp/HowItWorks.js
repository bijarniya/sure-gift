import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ImagesConfig from 'src/layouts/Common/Images';
import { Typography, Grid, Box } from '@material-ui/core';
import {
  varFadeInLeft,
  varFadeInRight,
  MotionInView
} from 'src/components/Animate';
// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.main,
    paddingTop: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 100
    }
  },
  headingOuter: {
    display: 'flex',
    justifyContent: 'center'
  },
  heading: {
    width: '100%',
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 64,
    fontWeight: 700,
    textAlign: 'center',
    lineHeight: '110%',
    [theme.breakpoints.down('sm')]: {
      fontSize: 44,
      width: '100%',
      padding: '0px 10px'
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 64,
      width: '100%',
      padding: '0px 10px'
    }
  },
  descriptionOuter: {
    marginTop: 15,
    display: 'flex',
    justifyContent: 'center'
  },
  discription: {
    width: '75%',
    color: theme.palette.text.gray,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 18,
    fontWeight: 400,
    textAlign: 'center',
    lineHeight: '160%',
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
      width: '100%',
      padding: '0px 10px'
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 14,
      width: '65%',
      padding: '0px 10px'
    }
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 88,
    width: '100%'
  },
  imageBox: {
    width: '75%',
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 14,
      width: '80%',
      padding: '0px 10px'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
      width: '100%',
      padding: '0px 10px'
    }
  }
}));

// ----------------------------------------------------------------------

HowItWorks.propTypes = {
  className: PropTypes.string
};

function HowItWorks() {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={12} className={classes.root}>
      <MotionInView variants={varFadeInLeft}>
        <Grid item xs={12} md={12} className={classes.headingOuter}>
          <Typography className={classes.heading}> How it works</Typography>
        </Grid>
      </MotionInView>
      <MotionInView variants={varFadeInRight}>
        <Grid item xs={12} md={12} className={classes.descriptionOuter}>
          <Typography className={classes.discription}>
            Buy and send gift cards from over 200 merchants across Nigeria in 3
            easy steps.
          </Typography>
        </Grid>
      </MotionInView>

      <Grid item xl={12} sm={12} className={classes.imageContainer}>
        <Box
          component="img"
          alt="howItWorks"
          src={ImagesConfig.msignup}
          className={classes.imageBox}
        />
      </Grid>
    </Grid>
  );
}
export default HowItWorks;

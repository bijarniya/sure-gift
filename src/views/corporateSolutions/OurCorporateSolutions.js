import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import { varFadeInUp, MotionInView } from 'src/components/Animate';
import CorporateSolutionsItem from './ CorporateSolutionsItem';

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 60
    }
  },
  headingOuter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 10,
      paddingRight: 10
    }
  },
  heading: {
    width: '100%',
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 44,
    fontWeight: 700,
    textAlign: 'center',
    lineHeight: '110%',
    [theme.breakpoints.down('sm')]: {
      fontSize: 28,
      width: '100%',
      padding: '0px 10px'
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 32,
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
    width: '72%',
    color: theme.palette.text.gray,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 18,
    fontWeight: 400,
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
      width: '100%',
      padding: '0px 10px'
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 14,
      width: '100%',
      padding: '0px 10px'
    }
  },
  imageContainer: {
    display: 'flex',
    paddingTop: 88,
    width: '100%',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  iconImages: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 10px'
    }
  }
}));

// ----------------------------------------------------------------------

OurCorporateSolutions.propTypes = {
  className: PropTypes.string
};

function OurCorporateSolutions() {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={12} className={classes.root}>
      <MotionInView variants={varFadeInUp}>
        <Grid item xs={12} md={12} className={classes.headingOuter}>
          <Typography className={classes.heading}>
            Our Corporate Solutions
          </Typography>
        </Grid>
      </MotionInView>
      <MotionInView variants={varFadeInUp}>
        <Grid item xs={12} md={12} className={classes.descriptionOuter}>
          <Typography className={classes.discription}>
            You see the hedges, how I got it shaped up? It’s important to shape
            up ypur hedges, it’s like getting a haircut, stay fresh.
          </Typography>
        </Grid>
      </MotionInView>
      <CorporateSolutionsItem />
    </Grid>
  );
}
export default OurCorporateSolutions;

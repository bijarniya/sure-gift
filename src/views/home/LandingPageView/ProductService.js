import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Box } from '@material-ui/core';
import ButtonLoading from 'src/components/Common/ButtonLoading';
import ImagesConfig from 'src/layouts/Common/Images';
import {
  varFadeInLeft,
  varFadeInUp,
  MotionInView
} from 'src/components/Animate';
// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 200,
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginTop: 30,
      marginLeft: 20,
      marginRight: 20
    },
    [theme.breakpoints.between('sm', 'md')]: {
      flexDirection: 'row'
    }
  },
  leftBox: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  imageContainer: {
    display: 'flex',
    paddingTop: 88,
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      paddingTop: 10,
      display: 'flex',
      justifyContent: 'center'
    }
  },
  brandGraph: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      width: 500,
      height: 'auto'
    }
  },
  rightBox: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingLeft: '3.5%',
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      alignItems: 'center',
      marginTop: 30
    }
  },
  heading: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 64,
    fontWeight: 700,
    width: '80%',
    lineHeight: '110%',
    [theme.breakpoints.down('sm')]: {
      fontSize: 32,
      width: '100%',
      textAlign: 'center'
    }
  },
  discription: {
    color: theme.palette.text.gray,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 18,
    fontWeight: 400,
    width: '80%',
    marginTop: 20,
    lineHeight: '160%',
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
      width: '100%',
      textAlign: 'center'
    }
  },
  buttonOuter: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.palette.button.primary,
    borderRadius: 22,
    width: 270,
    boxShadow: 'none',
    [theme.breakpoints.down('md')]: {
      width: 270
    }
  },
  buttonInner: {
    backgroundColor: theme.palette.button.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.dark,
    borderRadius: 22,
    fontSize: 18,
    fontWeight: 400,
    boxShadow: 'none',
    height: 80,
    textTransform: 'none',
    '&:hover': {
      backgroundColor: theme.palette.text.primary,
      color: theme.palette.text.dark,
      boxShadow: 'none',
      borderRadius: 22
    },
    [theme.breakpoints.down('md')]: {
      backgroundColor: theme.palette.button.primary,
      padding: '0px 0px'
    }
  }
}));

// ----------------------------------------------------------------------

OurClients.propTypes = {
  className: PropTypes.string
};

function OurClients({ className }) {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid className={classes.leftBox}>
        <Grid item xl={12} sm={12} className={classes.imageContainer}>
          <Box
            component="img"
            alt="icon"
            src={ImagesConfig.productService}
            className={classes.brandGraph}
          />
        </Grid>
      </Grid>
      <Grid className={classes.rightBox}>
        <MotionInView variants={varFadeInLeft}>
          <Typography className={classes.heading}>
            Have Product or Service? Become a Merchant
          </Typography>
          <Typography className={classes.discription}>
            {' '}
            I pick my choice, squeaky clean. The key to more success is to get
            massage once a week, very important, major key, cloth talk
          </Typography>
        </MotionInView>
        <MotionInView variants={varFadeInUp}>
          <ButtonLoading
            title={'Become a Merchant'}
            container={classes.buttonOuter}
            buttonClass={classes.buttonInner}
          />
        </MotionInView>
      </Grid>
    </Grid>
  );
}
export default OurClients;

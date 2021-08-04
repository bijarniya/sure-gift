import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { MotionInView, varFadeInUp } from 'src/components/Animate';
import ImagesConfig from 'src/layouts/Common/Images';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '175px 0px 225px 0px',
    backgroundImage: `url(${ImagesConfig.looking})`,
    backgroundSize: '100% 375px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('md')]: {
      padding: '100px 0px 100px 0px',
      backgroundSize: '100% 200px'
    }
  },
  heading: {
    fontSize: 64,
    fontWeight: 700,
    fontFamily: theme.palette.font.secondaryFontFamily,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundImage: `conic-gradient(${theme.palette.background.conic})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    MozBackgroundClip: 'text',
    MozTextFillColor: 'transparent',
    [theme.breakpoints.down('md')]: {
      fontSize: 30,
      fontWeight: 700
    }
  },
  subHeading: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontSize: 18,
    fontWeight: 400,
    justifyContent: 'center',
    textAlign: 'center'
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <MotionInView variants={varFadeInUp}>
        <Typography className={classes.heading}>
          Looking for something?
        </Typography>
        <Typography className={classes.subHeading}>
          Life is like a water fall, you’ve gotta flow.Major key, don’t fall fo
          the trap stay focused.
        </Typography>
      </MotionInView>
    </Grid>
  );
};
export default Header;

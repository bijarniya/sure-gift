import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography, Box } from '@material-ui/core';
import { varFadeInUp, MotionInView } from 'src/components/Animate';
import clsx from 'clsx';
import Icons from 'src/components/Icons';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.main,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: 200,
    [theme.breakpoints.down('sm')]: {
      marginTop: 50
    }
  },
  heading: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 400,
    fontSize: 56,
    [theme.breakpoints.between('sm', 'md')]: {},
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  containerSocial: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 80,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: '100%',
      marginTop: 40
    }
  },
  socialSec: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: '100%',
      maxWidth: '100%'
    }
  },
  title: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 400,
    fontSize: 20,
    marginLeft: 25,
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      marginTop: 10,
      marginBottom: 10,
      margin: 'auto'
    }
  },
  iconOuter: {
    width: 80,
    height: 80,
    borderRadius: 100,
    padding: 1,
    background: `conic-gradient(${theme.palette.background.conic})`
  },
  iconInner: {
    background: theme.palette.background.main,
    width: '100%',
    height: '100%',
    borderRadius: '100px',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
  }
}));

// ------------------------------------------------------
SocialFindUs.propTypes = {
  className: PropTypes.string
};

function SocialFindUs() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={clsx(classes.root)} id="socialId">
      <Typography className={classes.heading}>
        You can find our life at
      </Typography>
      <MotionInView variants={varFadeInUp}>
        <Grid item xs={12} lg={12} className={classes.containerSocial}>
          <Grid item xs={3} className={classes.socialSec}>
            <Box className={classes.iconOuter}>
              <Box className={classes.iconInner}>
                <Icons url={'facebook'} />
              </Box>
            </Box>
            <Typography className={classes.title}>Facebook</Typography>
          </Grid>
          <Grid item xs={3} className={classes.socialSec}>
            <Box className={classes.iconOuter}>
              <Box className={classes.iconInner}>
                <Icons url={'instagram'} />
              </Box>
            </Box>
            <Typography className={classes.title}>Instagram </Typography>
          </Grid>
          <Grid item xs={3} className={classes.socialSec}>
            <Box className={classes.iconOuter}>
              <Box className={classes.iconInner}>
                <Icons url={'twitter'} />
              </Box>
            </Box>
            <Typography className={classes.title}>Twitter </Typography>
          </Grid>
          <Grid item xs={3} className={classes.socialSec}>
            <Box className={classes.iconOuter}>
              <Box className={classes.iconInner}>
                <Icons url={'medium'} />
              </Box>
            </Box>
            <Typography className={classes.title}>Medium </Typography>
          </Grid>
        </Grid>
      </MotionInView>
    </Container>
  );
}

export default SocialFindUs;

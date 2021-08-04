import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Container, Box } from '@material-ui/core';
import clsx from 'clsx';

// -----------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  },
  containerOuter: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  leftBox: {
    width: '22%'
  },
  rightBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '78%',
    [theme.breakpoints.down('sm')]: {
      marginTop: 20
    }
  },
  rightInner: {},
  heading: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 400,
    fontSize: 18
  },
  title: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 700,
    fontSize: 24,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      fontSize: 18
    }
  },
  description: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 400,
    fontSize: 18,
    // marginBottom: 80,
    marginTop: 15,
    width: '76%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      fontSize: 15
      // marginBottom: 50
    }
  }
}));
// ----------------------------------------------------------------------

ReturnsList.propTypes = {
  className: PropTypes.string
};

function ReturnsList() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={clsx(classes.root)}>
      <Grid item xs={12} lg={12} className={classes.containerOuter}>
        <Grid className={classes.leftBox}>
          <Typography className={classes.heading}>Returns</Typography>
        </Grid>
        <Grid className={classes.rightBox}>
          <Box className={classes.rightInner}>
            <Typography className={classes.title}>
              What can we help you find, Srikant?
            </Typography>
            <Typography className={classes.description}>
              We will send you marketing promotions, special offers,
              inspiration, and policy updates via email.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ReturnsList;

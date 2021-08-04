import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Container } from '@material-ui/core';
import clsx from 'clsx';

// -----------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    [theme.breakpoints.between('sm', 'md')]: {
      flexDirection: 'row'
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: '0px 20px'
    }
  },
  heading: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 400,
    fontSize: 44,
    [theme.breakpoints.down('sm')]: {
      fontSize: 38,
      marginTop: 20
    }
  },
  tagLine: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 400,
    fontSize: 18,
    marginTop: 10,
    width: '44%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      fontSize: 15
    }
  }
}));
// ----------------------------------------------------------------------

FaqList.propTypes = {
  className: PropTypes.string
};

function FaqList() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={clsx(classes.root)}>
      <Grid item xs={12} lg={12} className={classes.topContainer}>
        <Typography className={classes.heading}>Customer Care</Typography>
        <Typography className={classes.tagLine}>
          If you cant find the answet to what you’re looking for, feel free to
          contact us directly hello@suregifts.com.ng
        </Typography>
      </Grid>
    </Container>
  );
}

export default FaqList;

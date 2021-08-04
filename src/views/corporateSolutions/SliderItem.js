import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  contentOuter: {
    width: '100%',
    overflow: 'hidden',
    position: 'relative'
  },
  contentSlide: {
    background:
      'linear-gradient(191.34deg, rgba(255, 254, 251, 0.025) 8.56%, rgba(255, 254, 251, 0) 85.73%)',
    backdropFilter: 'blur(64.0164px)',
    border: `1px solid ${theme.palette.border.grayWhite}`,
    display: 'flex',
    flexDirection: 'column',
    height: 368,
    width: '100%',
    borderRadius: 25,
    padding: '40px 50px 40px 40px',
    [theme.breakpoints.down('sm')]: {
      padding: '40px 15px 40px 15px'
    }
  },
  slideTitle: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 20,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16
    }
  },
  slideRole: {
    color: theme.palette.text.gray,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    marginTop: 10,
    [theme.breakpoints.down('sm')]: {
      fontSize: 14
    }
  },
  slideDescription: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 18,
    marginTop: 10,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16
    }
  }
}));

SliderItem.propTypes = {
  item: PropTypes.object
};

function SliderItem({ item }) {
  const classes = useStyles();

  return (
    <Grid className={classes.contentOuter}>
      <Grid className={classes.contentSlide}>
        <Typography className={classes.slideTitle}>{item.name}</Typography>
        <Typography className={classes.slideRole}>{item.role}</Typography>
        <Typography className={classes.slideDescription}>
          {item.description}
        </Typography>
      </Grid>
    </Grid>
  );
}
export default SliderItem;

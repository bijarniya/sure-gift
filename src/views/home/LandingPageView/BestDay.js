import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box } from '@material-ui/core';
import Icons from 'src/components/Icons';
import { varFadeInUp, MotionInView } from 'src/components/Animate';

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  bestDay: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    flexDirection: 'column',
    marginRight: 100,
    [theme.breakpoints.down('md')]: {
      marginTop: 30
    }
  },
  bestDayInner: {
    display: 'flex',
    flexDirection: 'row'
  },
  bestDayInfor: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: '11px',
    transform: 'rotate(-5deg)',
    background:
      'linear-gradient(180deg, rgba(255, 254, 251, 0.01) 0%, rgba(255, 254, 251, 0.13) 100%)',
    padding: '11px 15px',
    borderRadius: '50px',
    marginBottom: 5
  },
  bestDayContainer: {
    marginLeft: 5
  },
  time: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: '11px',
    transform: 'rotate(-5deg)',
    padding: '11px 15px',
    textAlign: 'right'
  }
}));
// ----------------------------------------------------------------------

BestDay.propTypes = {
  className: PropTypes.string
};

function BestDay() {
  const classes = useStyles();
  return (
    <Grid item xs={12} lg={12} className={classes.bestDay}>
      <MotionInView variants={varFadeInUp}>
        <Box className={classes.bestDayInner}>
          <Box>
            <Icons url={'bestDay'} />
          </Box>
          <Box className={classes.bestDayContainer}>
            <Box className={classes.bestDayInfor}>
              This is the best day ever
            </Box>
            <Box className={classes.bestDayInfor}>
              Thanks. This is the best{' '}
            </Box>
            <Box className={classes.time}>12:30 </Box>
          </Box>
        </Box>
      </MotionInView>
    </Grid>
  );
}

export default BestDay;

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import ButtonLoading from 'src/components/Common/ButtonLoading';
import { varFadeInUp, MotionInView } from 'src/components/Animate';
import RewardFullImages from 'src/components/Home/RewardFullImages';

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 80,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 10,
      paddingRight: 10
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
    width: '60%',
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 44,
    fontWeight: 700,
    textAlign: 'center',
    lineHeight: '110%',
    [theme.breakpoints.down('sm')]: {
      fontSize: 32,
      width: '100%',
      padding: '0px 10px'
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 32,
      width: '70%',
      padding: '0px 10px'
    }
  },
  descriptionOuter: {
    marginTop: 15,
    display: 'flex',
    justifyContent: 'center'
  },
  discription: {
    width: '56%',
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
      width: '65%',
      padding: '0px 10px'
    }
  },
  buttonOuter: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
    backgroundColor: theme.palette.button.primary,
    borderRadius: 18,
    width: 240,
    height: '60px',
    boxShadow: 'none',
    [theme.breakpoints.down('md')]: {
      width: 240
    }
  },
  buttonInner: {
    backgroundColor: theme.palette.button.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.dark,
    borderRadius: 18,
    fontSize: 16,
    fontWeight: 400,
    boxShadow: 'none',
    height: '60px',
    '&:hover': {
      backgroundColor: theme.palette.text.primary,
      color: theme.palette.text.dark,
      boxShadow: 'none',
      borderRadius: 18
    },
    [theme.breakpoints.down('md')]: {
      backgroundColor: theme.palette.button.primary,
      padding: '0px 0px'
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

RewardEmployees.propTypes = {
  className: PropTypes.string
};

function RewardEmployees() {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={12} className={classes.root}>
      <MotionInView variants={varFadeInUp}>
        <Grid item xs={12} md={12} className={classes.headingOuter}>
          <Typography className={classes.heading}>
            {' '}
            Reward your employees, consumers and fans with gift cards
          </Typography>
        </Grid>
      </MotionInView>
      <MotionInView variants={varFadeInUp}>
        <Grid item xs={12} md={12} className={classes.descriptionOuter}>
          <Typography className={classes.discription}>
            They will try to clise the door on you, just open it. They don’t
            want us to win. The key to more success is to get a massage once a
            week, very important
          </Typography>
        </Grid>
      </MotionInView>
      <MotionInView variants={varFadeInUp}>
        <ButtonLoading
          title={'Learn More'}
          container={classes.buttonOuter}
          buttonClass={classes.buttonInner}
        />
      </MotionInView>
      <RewardFullImages />
    </Grid>
  );
}
export default RewardEmployees;

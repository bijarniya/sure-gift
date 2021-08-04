import React from 'react';
import { makeStyles, Grid, Box, Typography } from '@material-ui/core';
import Icons from 'src/components/Icons';
import ButtonLoading from 'src/components/Common/ButtonLoading';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '30px 30px 65px 30px',
    [theme.breakpoints.down('sm')]: {
      padding: '30px 15px 65px 15px'
    }
  },
  topBox: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    paddingLeft: 12,
    paddingRight: 18
  },
  heading: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontSize: 24,
    fontWeight: 700,
    width: '94%'
  },
  icons: {
    cursor: 'pointer'
  },
  middleBox: {
    background: theme.palette.background.secondary,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 31,
    borderRadius: 30,
    padding: 25
  },
  middleLeft: {
    display: 'flex',
    flexDirection: 'column',
    width: '70%'
  },
  middleRight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    width: '30%'
  },
  birthdayTitle: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontSize: 18,
    fontWeight: 400,
    [theme.breakpoints.down('sm')]: {
      fontSize: 14
    }
  },
  today: {
    backgroundImage: `conic-gradient(${theme.palette.background.conic})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    MozBackgroundClip: 'text',
    MozTextFillColor: 'transparent',
    textTransform: 'uppercase',
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 14,
    fontWeight: 400,
    marginTop: 10,
    width: '17%',
    [theme.breakpoints.down('sm')]: {
      width: '25%',
      fontSize: 12
    }
  },
  bottomBox: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 35,
    paddingLeft: 25
  },
  date: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.gray,
    fontSize: 14,
    fontWeight: 400,
    marginTop: 10,
    [theme.breakpoints.down('sm')]: {
      fontSize: 12
    }
  },
  buttonOuter: {
    background: '#92FBB3',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 18,
    padding: 0,
    width: 150,
    [theme.breakpoints.down('sm')]: {
      width: 110
    }
  },
  buttonInner: {
    background: '#92FBB3',
    border: `0px solid #92FBB3`,
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.dark,
    fontSize: 14,
    borderRadius: 18,
    fontWeight: 400,
    margin: 0,
    padding: '0px 16.5px',
    boxShadow: 'none',
    '&:hover': {
      background: '#92FBB3',
      boxShadow: 'none',
      borderRadius: 18
    },
    [theme.breakpoints.down('md')]: {
      padding: '0px 0px'
    }
  }
}));

// ----------------------------------------------------------------------
const EventNotification = ({ closePopUp, ...props }) => {
  const classes = useStyles();
  const { data } = props;

  return (
    <Grid className={classes.root}>
      <Box className={classes.topBox}>
        <Box className={classes.heading}>{data && data.title}</Box>
        <Icons
          url={'closePopup'}
          className={classes.icons}
          height={30}
          width={30}
          onClick={closePopUp}
        />
      </Box>
      <Box className={classes.middleBox}>
        <Box className={classes.middleLeft}>
          <Typography className={classes.birthdayTitle}>
            Birthday Celebration
          </Typography>
          <Typography className={classes.today}>today</Typography>
        </Box>
        <Box className={classes.middleRight}>
          <ButtonLoading
            title={'Send Gifts'}
            handleClick={() => ''}
            container={classes.buttonOuter}
            buttonClass={classes.buttonInner}
          />
        </Box>
      </Box>
      <Box className={classes.bottomBox}>
        <Typography className={classes.birthdayTitle}>
          Wedding Celebration
        </Typography>
        <Typography className={classes.date}>24th March ‘18</Typography>
      </Box>
    </Grid>
  );
};

export default EventNotification;

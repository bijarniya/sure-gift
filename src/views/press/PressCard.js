import React from 'react';
import { Typography, Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ButtonLoading from 'src/components/Common/ButtonLoading';
import { varFadeInUp, MotionInView } from 'src/components/Animate';
import clsx from 'clsx';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.main,
    height: '100%'
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 263,
    width: 400,
    margin: '80px 0px 15px 20px',
    background:
      'linear-gradient(191.34deg, rgba(255, 254, 251, 0.025) 8.56%, rgba(255, 254, 251, 0) 85.73%)',
    backdropFilter: 'blur(40px)',
    borderRadius: 50,
    border: `1px solid ${theme.palette.border.grayWhite}`,
    [theme.breakpoints.down('md')]: {
      marginBottom: 15,
      width: 285,
      marginTop: 40
    }
  },
  boxMid: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 263,
    width: 400,
    margin: '50px 0px 35px 20px',
    background:
      'linear-gradient(191.34deg, rgba(255, 254, 251, 0.025) 8.56%, rgba(255, 254, 251, 0) 85.73%)',
    backdropFilter: 'blur(40px)',
    borderRadius: 50,
    border: `1px solid ${theme.palette.border.grayWhite}`,
    [theme.breakpoints.down('md')]: {
      marginBottom: 15,
      width: 285,
      marginTop: 40
    }
  },
  heading: {
    fontSize: 80,
    fontWeight: 700,
    textAlign: 'center',
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    [theme.breakpoints.down('md')]: {
      fontSize: 40
    }
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily
  },
  shortDiscription: {
    fontSize: 16,
    fontWeight: 400,
    color: theme.palette.text.gray,
    fontFamily: theme.palette.font.secondaryFontFamily,
    marginTop: 15
  },
  prefectButton: {
    marginTop: 30
  },
  buttonOuter: {
    display: 'flex',
    flexDirection: 'row',
    background: theme.palette.background.activeMenu,
    borderRadius: 18,
    padding: 0,
    width: 200,
    [theme.breakpoints.down('md')]: {
      width: 200
    }
  },
  buttonInner: {
    background: theme.palette.background.activeMenu,
    border: `0px solid ${theme.palette.text.dark}`,
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 14,
    boxShadow: 'none',
    borderRadius: 18,
    fontWeight: 400,
    margin: 0,
    padding: '16px 29px 16px 29px',
    '&:hover': {
      background: theme.palette.background.activeMenu,
      boxShadow: 'none',
      borderRadius: 18
    },
    [theme.breakpoints.down('md')]: {
      padding: '0px 0px'
    }
  }
}));

function PressCard() {
  const classes = useStyles();

  const handleButton = () => {};

  return (
    <Container maxWidth="lg" className={clsx(classes.root)}>
      <Typography className={classes.heading}>Press</Typography>
      <Box className={classes.container}>
        <Box className={classes.box}>
          <Typography className={classes.title}>Media kit</Typography>
          <Typography className={classes.shortDiscription}>
            Open our Brand guidlines
          </Typography>
          <Box className={classes.prefectButton}>
            <MotionInView variants={varFadeInUp}>
              <ButtonLoading
                title={'Download'}
                container={classes.buttonOuter}
                buttonClass={classes.buttonInner}
                handleClick={handleButton}
              />
            </MotionInView>
          </Box>
        </Box>

        <Box className={classes.boxMid}>
          <Typography className={classes.title}>
            Executive Team Imagest
          </Typography>
          <Typography className={classes.shortDiscription}>
            Open our Brand guidlines
          </Typography>
          <Box className={classes.prefectButton}>
            <MotionInView variants={varFadeInUp}>
              <ButtonLoading
                title={'See all photos'}
                container={classes.buttonOuter}
                buttonClass={classes.buttonInner}
                handleClick={handleButton}
              />
            </MotionInView>
          </Box>
        </Box>

        <Box className={classes.box}>
          <Typography className={classes.title}>
            Frequently Asked Questions
          </Typography>
          <Typography className={classes.shortDiscription}>
            Open our Brand guidlines
          </Typography>
          <Box className={classes.prefectButton}>
            <MotionInView variants={varFadeInUp}>
              <ButtonLoading
                title={'Connect'}
                container={classes.buttonOuter}
                buttonClass={classes.buttonInner}
                handleClick={handleButton}
              />
            </MotionInView>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
export default PressCard;

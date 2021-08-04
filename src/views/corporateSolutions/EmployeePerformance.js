import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography } from '@material-ui/core';
import ImagesConfig from 'src/layouts/Common/Images';
import { motion } from 'framer-motion';
import { varFadeInUp, MotionInView } from 'src/components/Animate';
import ButtonLoading from 'src/components/Common/ButtonLoading';
// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  prefectContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.between('sm', 'md')]: {
      flexDirection: 'row'
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: '0px 20px'
    }
  },
  prefectLeftBox: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
      maxWidth: '100%'
    }
  },
  prefectRightBox: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
      maxWidth: '100%'
    }
  },
  prefectHeading: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 56,
    lineHeight: '110%',
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 42
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 25,
      textAlign: 'center'
    }
  },
  tagline: {
    color: theme.palette.text.secondary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 18,
    marginTop: 25,
    width: '96%',
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 16,
      width: '100%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      fontSize: 14,
      textAlign: 'center'
    }
  },
  prefectButton: {
    marginTop: 40,
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center'
    }
  },
  buttonOuter: {
    display: 'flex',
    flexDirection: 'row',
    background: `conic-gradient(${theme.palette.background.conic})`,
    borderRadius: 18,
    padding: 1,
    width: 270,
    [theme.breakpoints.down('md')]: {
      width: 200
    }
  },
  buttonInner: {
    background: `conic-gradient(${theme.palette.background.conic})`,
    border: `2px solid ${theme.palette.text.dark}`,
    color: theme.palette.text.dark,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 18,
    boxShadow: 'none',
    borderRadius: 18,
    fontWeight: 700,
    margin: 1,
    padding: '29px 0px 29px 0px',
    '&:hover': {
      backgroundColor: theme.palette.text.dark,
      boxShadow: 'none',
      borderRadius: 18
    },
    [theme.breakpoints.down('md')]: {
      padding: '0px 0px'
    }
  },
  newGift: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '-12%',
    [theme.breakpoints.between('sm', 'md')]: {
      margin: '0px 0px 0px 0px'
    },
    [theme.breakpoints.down('sm')]: {
      margin: '30px 0px 0px 0px'
    }
  }
}));
// ----------------------------------------------------------------------

PerfectGiftEveryone.propTypes = {
  className: PropTypes.string
};

function PerfectGiftEveryone() {
  const classes = useStyles();

  const handleButton = () => {};

  return (
    <Grid item xs={12} lg={12} className={classes.prefectContainer}>
      <Grid item xs={6} className={classes.prefectLeftBox}>
        <MotionInView variants={varFadeInUp}>
          <Typography className={classes.prefectHeading}>
            Improve employee performance & Increase consumer engagemnt
          </Typography>
          <Typography className={classes.tagline}>
            Every chance I get, I water the plants, Lion! You do know, you do
            know that ehty don’t want you to have lunch. I’m keeping it real
            with you, so what you going do is have lunch.
          </Typography>
          <Box className={classes.prefectButton}>
            <ButtonLoading
              title={'Registration Now'}
              handleClick={handleButton}
              container={classes.buttonOuter}
              buttonClass={classes.buttonInner}
            />
          </Box>
        </MotionInView>
      </Grid>
      <Grid item xs={6} className={classes.prefectRightBox}>
        <motion.div variants={varFadeInUp} className={classes.newGift}>
          <Box
            component="img"
            alt="icon"
            src={ImagesConfig.sureBusiness}
            className={''}
          />
        </motion.div>
      </Grid>
    </Grid>
  );
}

export default PerfectGiftEveryone;

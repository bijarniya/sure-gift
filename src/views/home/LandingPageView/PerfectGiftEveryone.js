import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography } from '@material-ui/core';
import ImagesConfig from 'src/layouts/Common/Images';
import { motion } from 'framer-motion';
import { varFadeInUp, MotionInView } from 'src/components/Animate';
import { useHistory } from 'react-router-dom';
import { PATH_HOME } from 'src/routes/paths';
import ButtonLoading from 'src/components/Common/ButtonLoading';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  prefectContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 58,
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
    lineHeight: '110%',
    ...theme.typography.heading80,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  tagline: {
    color: theme.palette.text.secondary,
    ...theme.typography.heading18,
    marginTop: 25,
    [theme.breakpoints.down('sm')]: {
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
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    flexDirection: 'column',
    marginRight: 50,
    [theme.breakpoints.between('sm', 'md')]: {
      margin: '0px 0px 0px 0px'
    },
    [theme.breakpoints.down('sm')]: {
      margin: '30px 0px 0px 0px'
    }
  }
}));

PerfectGiftEveryone.propTypes = {
  className: PropTypes.string
};

function PerfectGiftEveryone() {
  const classes = useStyles();
  const history = useHistory();

  const handleButton = () => {
    history.push(PATH_HOME.giftcard);
  };

  return (
    <Grid item xs={12} lg={12} className={classes.prefectContainer}>
      <Grid item xs={6} className={classes.prefectLeftBox}>
        <MotionInView variants={varFadeInUp}>
          <Typography className={classes.prefectHeading}>
            The perfect Gift for Everyone
          </Typography>
          <Typography className={classes.tagline}>
            Gifts makes it easy for you to give the perfect gift card
          </Typography>
          <Box className={classes.prefectButton}>
            <ButtonLoading
              title={'Shop Now'}
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
            src={ImagesConfig.newGift}
            className={''}
          />
        </motion.div>
      </Grid>
    </Grid>
  );
}

export default PerfectGiftEveryone;

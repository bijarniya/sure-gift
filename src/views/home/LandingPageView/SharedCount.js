import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography } from '@material-ui/core';
import ImagesConfig from 'src/layouts/Common/Images';
import { motion } from 'framer-motion';
import { varFadeInRight } from 'src/components/Animate';
import Icons from 'src/components/Icons';
// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%'
  },
  topBox: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    marginRight: '27%',
    flexDirection: 'column',
    marginTop: 0,
    [theme.breakpoints.down('sm', 'md')]: {
      marginTop: 26,
      marginRight: '15%',
      alignItems: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 26,
      marginRight: '0%',
      alignItems: 'center'
    }
  },
  topBoxInner: {
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 117,
    width: 183,
    backgroundImage: `url(${ImagesConfig.sharedBack})`
  },
  countInfo: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 12,
    transform: 'rotate(12deg)'
  }
}));
// ----------------------------------------------------------------------

SharedCount.propTypes = {
  className: PropTypes.string
};

function SharedCount() {
  const classes = useStyles();

  return (
    <Grid item xs={12} lg={12} className={classes.container}>
      <motion.div variants={varFadeInRight} className={classes.topBox}>
        <Box className={classes.topBoxInner}>
          <Icons url={'groupImages'} />
          <Typography className={classes.countInfo}>+340 Shared</Typography>
        </Box>
      </motion.div>
    </Grid>
  );
}

export default SharedCount;

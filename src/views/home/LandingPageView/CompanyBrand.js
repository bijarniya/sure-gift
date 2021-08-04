import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Box } from '@material-ui/core';
import ImagesConfig from 'src/layouts/Common/Images';
import Icons from 'src/components/Icons';
import clsx from 'clsx';

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    width: '100%'
  },
  imageContainer: {
    display: 'flex',
    width: '100%',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      [theme.breakpoints.down('sm')]: {
        padding: '0px 20px 0px 20px'
      }
    }
  },
  fullImageHeight: {
    height: 520,
    backgroundRepeat: 'no-repeat !important'
  },
  smallTopImages: {
    height: 200,
    backgroundRepeat: 'no-repeat !important'
  },
  smallBottomImages: {
    height: 290,
    backgroundRepeat: 'no-repeat !important',
    marginTop: 30,
    [theme.breakpoints.down('sm')]: {
      marginTop: 30,
      height: 290
    }
  },
  firstLastImage: {
    height: 520,
    width: 150,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      backgroundSize: '100%',
      height: 520
    }
  },
  smallTopWidth: {
    width: 270,
    height: 200,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      backgroundSize: '100%',
      height: 200
    }
  },
  smallBottomWidth: {
    width: 270,
    height: 290,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      backgroundSize: '100%',
      height: 290
    }
  },
  leftM: {
    marginLeft: 40,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    }
  },
  middleImage: {
    width: 440,
    height: 520,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      backgroundSize: '100%',
      marginTop: 30,
      height: 520
    }
  },
  title: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 30,
    fontWeight: 400,
    paddingTop: 30,
    paddingLeft: 30
  }
}));

// ----------------------------------------------------------------------

CompanyBrand.propTypes = {
  className: PropTypes.string
};

function CompanyBrand() {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid item xl={12} sm={12} className={classes.imageContainer}>
        <Grid className={classes.container}>
          <Box
            component="img"
            alt="icon"
            src={ImagesConfig.headphone}
            className={clsx(classes.fullImageHeight, classes.firstLastImage)}
          />
        </Grid>

        <Grid className={clsx(classes.container, classes.leftM)}>
          <Box
            style={{ backgroundImage: `url(${ImagesConfig.phone})` }}
            className={clsx(classes.smallTopImages, classes.smallTopWidth)}
          >
            <Icons url={'phone'} className={clsx(classes.title)} />
          </Box>
          <Box
            style={{ backgroundImage: `url(${ImagesConfig.hm})` }}
            className={clsx(
              classes.smallBottomImages,
              classes.smallBottomWidth
            )}
          >
            <Icons url={'hm'} className={clsx(classes.title)} />
          </Box>
        </Grid>

        <Grid className={clsx(classes.container, classes.leftM)}>
          <Box
            style={{ backgroundImage: `url(${ImagesConfig.spar})` }}
            className={clsx(classes.fullImageHeight, classes.middleImage)}
          >
            <Icons url={'spar'} className={clsx(classes.title)} />
          </Box>
        </Grid>

        <Grid className={clsx(classes.container, classes.leftM)}>
          <Box
            style={{ backgroundImage: `url(${ImagesConfig.jumia})` }}
            className={clsx(classes.smallTopImages, classes.smallTopWidth)}
          >
            <Icons url={'jumia'} className={clsx(classes.title)} />
          </Box>
          <Box
            style={{ backgroundImage: `url(${ImagesConfig.samsung})` }}
            className={clsx(
              classes.smallBottomImages,
              classes.smallBottomWidth
            )}
          >
            <Icons url={'samsung'} className={clsx(classes.title)} />
          </Box>
        </Grid>

        <Grid className={clsx(classes.container, classes.leftM)}>
          <Box
            style={{ backgroundImage: `url(${ImagesConfig.splash})` }}
            className={clsx(classes.fullImageHeight, classes.firstLastImage)}
          >
            <Typography className={clsx(classes.title)}>Splash</Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default CompanyBrand;

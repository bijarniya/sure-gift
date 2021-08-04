import React from 'react';
import { makeStyles, Grid, Box, Typography } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import Icons from 'src/components/Icons';
// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
  },
  googleBox: {
    display: 'flex',
    flexDirection: 'row'
  },
  googleButton: {
    display: 'flex',
    flexDirection: 'row',
    background: '#4285F4',
    borderRadius: 16,
    width: 290,
    height: 50,
    padding: '0px !important',
    '&:hover': {
      backgroundColor: '#4285F4',
      boxShadow: 'none'
    },
    [theme.breakpoints.down('md')]: {
      width: 200
    }
  },
  googleContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
  },
  gIcon: {
    width: 14,
    height: '14.93px',
    marginLeft: 15
  },
  googleTitle: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 14,
    fontWeight: 400,
    marginLeft: 56,
    [theme.breakpoints.down('md')]: {
      marginLeft: 20
    }
  },
  faceBookBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10
  },
  socialButton: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.palette.background.secondary,
    borderRadius: 16,
    width: 80,
    height: 50,
    boxShadow: 'none',
    padding: '0px !important',
    '&:hover': {
      backgroundColor: theme.palette.background.secondary,
      boxShadow: 'none'
    },
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  socialContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  iconWithButton: {
    width: 'auto',
    height: 'auto'
  }
}));

// ----------------------------------------------------------------------
const SocialLoginButton = () => {
  const classes = useStyles();

  const handleButton = () => {};

  return (
    <Grid className={classes.root}>
      <Box className={classes.googleBox}>
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          className={classes.googleButton}
          onClick={handleButton}
        >
          <Box className={classes.googleContent}>
            <Icons url={'googleIcon'} className={classes.gIcon} />
            <Typography className={classes.googleTitle}>
              Sign in with google
            </Typography>
          </Box>
        </LoadingButton>
      </Box>
      <Box className={classes.faceBookBox}>
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          className={classes.socialButton}
          onClick={handleButton}
        >
          <Box className={classes.socialContent}>
            <Icons url={'facebook'} className={classes.iconWithButton} />
          </Box>
        </LoadingButton>
      </Box>
      <Box className={classes.faceBookBox}>
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          className={classes.socialButton}
          onClick={handleButton}
        >
          <Box className={classes.socialContent}>
            <Icons url={'twitter'} className={classes.iconWithButton} />
          </Box>
        </LoadingButton>
      </Box>
    </Grid>
  );
};

export default SocialLoginButton;

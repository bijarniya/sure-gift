import React from 'react';
import { makeStyles, Grid, Box, Typography } from '@material-ui/core';
import Icons from 'src/components/Icons';
import { LoadingButton } from '@material-ui/lab';
import clsx from 'clsx';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: 40
  },
  topBox: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
  },
  heading: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    fontSize: '24px',
    width: '94%'
  },
  icons: {
    cursor: 'pointer'
  },
  topMargin: {
    marginTop: 20
  },
  button: {
    backgroundColor: theme.palette.button.primary,
    borderRadius: 18,
    fontSize: 14,
    color: theme.palette.text.dark,
    padding: '25px 0px 25px 0px',
    boxShadow: '0 0px 0px 0 rgb(0 171 85 / 24%) !important',
    '&:hover': {
      backgroundColor: theme.palette.button.primary,
      boxShadow: '0 0px 0px 0 rgb(0 171 85 / 24%) !important'
    }
  },
  buttonBox: {
    padding: '60px 35px 0px 35px'
  },
  title: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontSize: 30,
    fontWeight: 700
  },
  description: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontSize: 14,
    fontWeight: 400,
    marginTop: 10,
    width: '100%',
    textAlign: 'center'
  },
  middleBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconSec: {
    marginTop: '-6px'
  }
}));

// ----------------------------------------------------------------------
const PaymentSuccessfulPopup = ({ closePopUp, ...props }) => {
  const classes = useStyles();
  const { data } = props;

  const handleReDirection = (path) => {
    closePopUp();
  };

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
      <Box className={clsx(classes.middleBox, classes.iconSec)}>
        <Icons url={'successCheckMark'} />
      </Box>
      <Box sx={{ mb: 3 }} />
      <Box className={classes.middleBox}>
        <Typography className={classes.title}> Payment Successful </Typography>
        <Typography className={classes.description}>
          You have successfully topped up your balance
        </Typography>
      </Box>
      <Box className={classes.buttonBox}>
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          className={classes.button}
          onClick={() => handleReDirection()}
        >
          Close
        </LoadingButton>
      </Box>
    </Grid>
  );
};

export default PaymentSuccessfulPopup;

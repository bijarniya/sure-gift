import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Grid, Box } from '@material-ui/core';
import ButtonLoading from 'src/components/Common/ButtonLoading';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row'
  },
  buttonOuter: {
    display: 'flex',
    flexDirection: 'row',
    background: `conic-gradient(${theme.palette.background.conic})`,
    borderRadius: 18,
    padding: 1,
    width: '100%',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  buttonOuterInActive: {
    display: 'flex',
    flexDirection: 'row',
    background: theme.palette.background.secondary,
    borderRadius: 18,
    padding: 1,
    width: '100%',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  buttonInner: {
    background: `conic-gradient(${theme.palette.background.conic})`,
    border: `2px solid ${theme.palette.text.dark}`,
    color: theme.palette.text.dark,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 16,
    boxShadow: 'none',
    borderRadius: 18,
    fontWeight: 400,
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
  buttonInActive: {
    background: theme.palette.background.secondary,
    border: `2px solid ${theme.palette.background.secondary}`,
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 16,
    boxShadow: 'none',
    borderRadius: 18,
    fontWeight: 400,
    margin: 1,
    padding: '29px 0px 29px 0px',
    '&:hover': {
      backgroundColor: theme.palette.background.secondary,
      boxShadow: 'none',
      borderRadius: 18
    },
    [theme.breakpoints.down('md')]: {
      padding: '0px 0px'
    }
  },
  buttonSec: {
    width: 216,
    marginRight: 10
  },
  iconWithButton: {
    marginRight: 10
  }
}));

function DeliveryTabs({ handleSteps, deliveryStep }) {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={clsx(classes.root)}>
      {deliveryStep === 1 ? (
        <Box className={classes.buttonSec}>
          <ButtonLoading
            title={'Send via Email'}
            container={classes.buttonOuter}
            buttonClass={classes.buttonInner}
            icon={'emailActive'}
            iconClass={classes.iconWithButton}
          />
        </Box>
      ) : (
        <Box className={classes.buttonSec}>
          <ButtonLoading
            title={'Send via Email'}
            handleClick={() => handleSteps(1)}
            container={classes.buttonOuterInActive}
            buttonClass={classes.buttonInActive}
            icon={'emailInActive'}
            iconClass={classes.iconWithButton}
          />
        </Box>
      )}

      {deliveryStep === 2 ? (
        <Box className={classes.buttonSec}>
          <ButtonLoading
            title={'Print at Home'}
            container={classes.buttonOuter}
            buttonClass={classes.buttonInner}
            icon={'printActive'}
            iconClass={classes.iconWithButton}
          />
        </Box>
      ) : (
        <Box className={classes.buttonSec}>
          <ButtonLoading
            title={'Print at Home'}
            handleClick={() => handleSteps(2)}
            container={classes.buttonOuterInActive}
            buttonClass={classes.buttonInActive}
            icon={'printInActive'}
            iconClass={classes.iconWithButton}
          />
        </Box>
      )}

      {deliveryStep === 3 ? (
        <Box className={classes.buttonSec}>
          <ButtonLoading
            title={'Home Delivey'}
            container={classes.buttonOuter}
            buttonClass={classes.buttonInner}
            icon={'homeActive'}
            iconClass={classes.iconWithButton}
          />
        </Box>
      ) : (
        <Box className={classes.buttonSec}>
          <ButtonLoading
            title={'Home Delivey'}
            handleClick={() => handleSteps(3)}
            container={classes.buttonOuterInActive}
            buttonClass={classes.buttonInActive}
            icon={'homeInActive'}
            iconClass={classes.iconWithButton}
          />
        </Box>
      )}
    </Grid>
  );
}
export default DeliveryTabs;

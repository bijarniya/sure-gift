import React from 'react';
import clsx from 'clsx';
import { Grid, Box, Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import Icons from 'src/components/Icons';
import { makeStyles } from '@material-ui/core/styles';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.main,
    paddingTop: 346,
    [theme.breakpoints.down('md')]: {
      paddingTop: 100
    }
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  heading: {
    width: '100%',
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 44,
    fontWeight: 700,
    lineHeight: '130%',
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 32,
      width: '100%',
      padding: '0px 10px'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 22,
      width: '100%',
      padding: '0px 10px'
    }
  },
  onlineInner: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-between',
      marginTop: 60,
      width: '90%'
    }
  },
  iconOuter: {
    width: 90,
    height: 90,
    borderRadius: 30,
    background: `conic-gradient(${theme.palette.background.conic})`,
    padding: 5,
    cursor: 'pointer'
  },
  iconInner: {
    background: `conic-gradient(${theme.palette.background.conic})`,
    border: `2px solid ${theme.palette.text.dark}`,
    borderRadius: 30,
    height: '100%',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center'
  },
  arrowOuter: {
    padding: '0px 43px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
      padding: 0
    }
  },
  onlineContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    textAlign: 'center'
  },
  onlineContentInner: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '33%'
  },
  title: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 20,
    fontWeight: 700,
    [theme.breakpoints.down('sm')]: {
      fontSize: 13
    }
  },
  description: {
    color: theme.palette.text.gray,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 16,
    fontWeight: 400,
    marginTop: 8,
    width: '75%',
    [theme.breakpoints.down('sm')]: {
      fontSize: 8
    }
  },
  selectItem: {
    width: '60%'
  }
}));

function OnlineReddem() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={clsx(classes.root)}>
      <Grid item xs={12} className={classes.container}>
        <Typography className={classes.heading}>
          How to Reddem Gift Cards{' '}
          <span
            style={{
              color: '#92FBB3'
            }}
          >
            Online
          </span>
        </Typography>
        <Grid className={classes.onlineInner}>
          <Box className={classes.iconOuter}>
            <Box className={classes.iconInner}>
              <Icons url={'selectItem'} />
            </Box>
          </Box>
          <Box className={classes.arrowOuter}>
            <Icons url={'leftToRightArrow'} />
          </Box>
          <Box className={classes.iconOuter}>
            <Box className={classes.iconInner}>
              <Icons url={'voucherCode'} />
            </Box>
          </Box>
          <Box className={classes.arrowOuter}>
            <Icons url={'leftToRightArrow'} />
          </Box>
          <Box className={classes.iconOuter}>
            <Box className={classes.iconInner}>
              <Icons url={'updateeCart'} />
            </Box>
          </Box>
        </Grid>
        <Grid className={classes.onlineContent}>
          <Box className={classes.onlineContentInner}>
            <Typography className={classes.title}>Select an Item</Typography>
            <Typography
              className={clsx(classes.description, classes.selectItem)}
            >
              Visit online stores and add items to cart
            </Typography>
          </Box>
          <Box className={classes.onlineContentInner}>
            <Typography className={classes.title}>
              Inset Voucher Code
            </Typography>
            <Typography className={classes.description}>
              Insert 8 digit Suregifts voucher code in the gift card box
              specified on the cart page
            </Typography>
          </Box>
          <Box className={classes.onlineContentInner}>
            <Typography className={classes.title}>Updatee Cart</Typography>
            <Typography className={classes.description}>
              Update the cart by applying the voucher code and proceed to
              checkout
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
export default OnlineReddem;

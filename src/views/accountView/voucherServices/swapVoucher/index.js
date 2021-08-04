import React from 'react';
import Page from 'src/components/Page';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import SwapVoucherForm from './SwapVoucherForm';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    background: theme.palette.background.secondary,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 30,
    padding: '40px 50px 40px 50px',
    [theme.breakpoints.down('sm')]: {
      padding: '30px 15px 30px 15px'
    }
  }
}));

function SwapVoucher() {
  const classes = useStyles();
  return (
    <Page title="Voucher Services" id="move_top" className={classes.root}>
      <Grid className={classes.content}>
        <SwapVoucherForm />
      </Grid>
    </Page>
  );
}
export default SwapVoucher;

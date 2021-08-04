import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Grid } from '@material-ui/core';
import PaymentMethod from './PaymentMethod';
import OrderSummaryDetails from './OrderSummaryDetails';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 430,
    marginBottom: 10,
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row'
  }
}));
function OrderSummary() {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={clsx(classes.root)}>
      <OrderSummaryDetails />
      <PaymentMethod />
    </Grid>
  );
}
export default OrderSummary;

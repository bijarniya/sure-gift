import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Grid } from '@material-ui/core';
import OrderAmount from './OrderAmount';
import SummaryDetails from './SummaryDetails';

// ----------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.between('sm', 'md')]: {
      flexDirection: 'row'
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  }
}));
function OrderSummary() {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={clsx(classes.root)}>
      <SummaryDetails />
      <OrderAmount />
    </Grid>
  );
}
export default OrderSummary;

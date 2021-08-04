import React from 'react';
import Page from 'src/components/Page';
import { makeStyles } from '@material-ui/core/styles';
import CheckVoucherTop from './CheckVoucherTop';
import CheckVoucherList from './CheckVoucherList';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.secondary,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 30,
    padding: '25px 31.91px 50px 0px'
  }
}));

function CheckVoucherBalanceHistory() {
  const classes = useStyles();
  return (
    <Page title="Suregifts business" id="move_top" className={classes.root}>
      <CheckVoucherTop />
      <CheckVoucherList />
    </Page>
  );
}
export default CheckVoucherBalanceHistory;

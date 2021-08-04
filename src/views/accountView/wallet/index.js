import React from 'react';
import Page from 'src/components/Page';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import WalletTop from './WalletTop';
import WalletList from './WalletList';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {}
}));

function Wallet() {
  const classes = useStyles();
  return (
    <Page title="Suregifts business" id="move_top" className={classes.root}>
      <Grid className={classes.content}>
        <WalletTop />
        <WalletList />
      </Grid>
    </Page>
  );
}
export default Wallet;

import React from 'react';
import Page from 'src/components/Page';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {},
}));

// ----------------------------------------------------------------------

function DashboardAppView() {
  const classes = useStyles();

  return (
    <Page title="Dashboard" className={classes.root}>
      <Container maxWidth="xl">
        
      </Container>
    </Page>
  );
}

export default DashboardAppView;

import React from 'react';
import Page from 'src/components/Page';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ContactsForm from './ContactsForm';
import Events from './Events';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {},
  topContainer: {
    background: theme.palette.background.secondary,
    borderRadius: 30,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 25px 30px 25px',
    [theme.breakpoints.down('sm')]: {
      padding: '30px 15px 30px 15px'
    }
  }
}));

function Contacts() {
  const classes = useStyles();
  return (
    <Page title="Suregifts contacts" id="move_top" className={classes.root}>
      <Grid className={classes.topContainer}>
        <ContactsForm />
        <Events />
      </Grid>
    </Page>
  );
}
export default Contacts;

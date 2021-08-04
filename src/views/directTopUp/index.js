import React from 'react';
import Page from 'src/components/Page';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Container, Grid } from '@material-ui/core';
import Footer from 'src/components/Common/Footer';
import Summary from './Summary';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  content: {
    padding: '106px 0px 0px 0px',
    background: theme.palette.background.main,
    [theme.breakpoints.down('md')]: {
      padding: '65px 0px 0px 0px'
    }
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    color: '#fff',
    width: '100%'
  },
  middleContainer: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.between('sm', 'md')]: {
      flexDirection: 'row'
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  bottomContainer: {
    backgroundColor: theme.palette.background.main,
    padding: '50px 0px 100px 0px',
    [theme.breakpoints.down('md')]: {
      padding: '50px 0px 100px 0px'
    }
  }
}));
function DirectTopUp() {
  const classes = useStyles();

  return (
    <Page title="Suregifts Customer" id="move_top" className={classes.root}>
      <div className={classes.content}>
        <Container maxWidth="lg" className={clsx(classes.container)}>
          <Grid item xs={12} className={clsx(classes.middleContainer)}>
            <Summary />
          </Grid>
        </Container>
      </div>
      <div className={classes.bottomContainer}>
        <Footer />
      </div>
    </Page>
  );
}
export default DirectTopUp;

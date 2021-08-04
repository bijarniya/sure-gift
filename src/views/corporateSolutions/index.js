import React from 'react';
import Page from 'src/components/Page';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import clsx from 'clsx';
import Footer from 'src/components/Common/Footer';
import EmployeePerformance from './EmployeePerformance';
import OurClients from './OurClients';
import OurCorporateSolutions from './OurCorporateSolutions';
import ClientsAreSaying from './ClientsAreSaying';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    backgroundColor: theme.palette.background.main
  },
  content: {
    backgroundColor: theme.palette.background.main,
    padding: '166px 0px 0px 0px',
    [theme.breakpoints.down('md')]: {
      padding: '100px 0px 0px 0px'
    }
  },
  contentMiddle: {
    backgroundColor: theme.palette.background.main,
    [theme.breakpoints.down('md')]: {}
  },
  innerContainer: {
    background: theme.palette.background.main,
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  bottomContainer: {
    backgroundColor: theme.palette.background.main,
    padding: '100px 0px 100px 0px',
    [theme.breakpoints.down('md')]: {
      padding: '50px 0px 100px 0px'
    }
  },
  fullContainer: {
    backgroundColor: theme.palette.background.main,
    padding: '90px 0px 0px 0px',
    [theme.breakpoints.down('md')]: {
      padding: '20px 0px 0px 0px'
    }
  }
}));
function CorporateSolutions() {
  const classes = useStyles();
  return (
    <Page title="Suregifts business" id="move_top" className={classes.root}>
      <div className={classes.content}>
        <Container maxWidth="lg" className={clsx(classes.innerContainer)}>
          <EmployeePerformance />
          <OurCorporateSolutions />
        </Container>
      </div>
      <div className={classes.fullContainer}>
        <OurClients />
      </div>
      <div className={classes.contentMiddle}>
        <Container maxWidth="lg" className={clsx(classes.innerContainer)}>
          <ClientsAreSaying />
        </Container>
      </div>
      <div className={classes.bottomContainer}>
        <Footer />
      </div>
    </Page>
  );
}
export default CorporateSolutions;

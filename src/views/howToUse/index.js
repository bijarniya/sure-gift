import React from 'react';
import Page from 'src/components/Page';
import { makeStyles } from '@material-ui/core/styles';
import Footer from 'src/components/Common/Footer';
import HowToUse from './HowToUse';
import OnlineReddem from './OnlineReddem';
import OfflineReddem from './OfflineReddem';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.main,
    height: '100%'
  },
  content: {
    backgroundColor: theme.palette.background.main,
    padding: '287px 0px 0px 0px',
    [theme.breakpoints.down('md')]: {
      padding: '65px 0px 0px 0px'
    }
  },
  bottomContainer: {
    backgroundColor: theme.palette.background.main,
    padding: '50px 0px 100px 0px',
    [theme.breakpoints.down('md')]: {
      padding: '50px 0px 100px 0px'
    }
  },
  fullContainer: {
    backgroundColor: theme.palette.background.main,
    padding: '90px 0px 0px 0px',
    [theme.breakpoints.down('md')]: {
      padding: '90px 0px 0px 0px'
    }
  }
}));

function HowToUsePage() {
  const classes = useStyles();

  return (
    <Page title="Suregifts Customer" id="move_top" className={classes.root}>
      <div className={classes.content}>
        <HowToUse />
        <OnlineReddem />
        <OfflineReddem />
      </div>
      <div className={classes.bottomContainer}>
        <Footer />
      </div>
    </Page>
  );
}
export default HowToUsePage;

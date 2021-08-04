import React from 'react';
import Page from 'src/components/Page';
import { makeStyles } from '@material-ui/core/styles';
import Footer from 'src/components/Common/Footer';
import RewardFullImages from 'src/components/Home/RewardFullImages';
import HelpDownArrow from 'src/components/Home/HelpDownArrow';
import NeedHelp from './NeedHelp';
import SocialFindUs from 'src/components/Home/SocialFindUs';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    background: theme.palette.background.main
  },
  content: {
    background: theme.palette.background.main,
    padding: '220px 0px 0px 0px',
    [theme.breakpoints.down('md')]: {
      padding: '65px 0px 0px 0px'
    }
  },
  bottomContainer: {
    background: theme.palette.background.main,
    padding: '150px 0px 100px 0px',
    [theme.breakpoints.down('md')]: {
      padding: '90px 0px 100px 0px'
    }
  },
  fullContainer: {
    background: theme.palette.background.main,
    padding: '150px 0px 0px 0px',
    [theme.breakpoints.down('md')]: {
      padding: '90px 0px 0px 0px'
    }
  }
}));
function LandingPageView() {
  const classes = useStyles();
  return (
    <Page title="Suregifts Customer" id="move_top" className={classes.root}>
      <div className={classes.content}>
        <NeedHelp />
        <HelpDownArrow icon={'helpDownArrow'} />
      </div>
      <div className={classes.fullContainer}>
        <RewardFullImages />
        <SocialFindUs />
      </div>
      <div className={classes.bottomContainer}>
        <Footer />
      </div>
    </Page>
  );
}
export default LandingPageView;

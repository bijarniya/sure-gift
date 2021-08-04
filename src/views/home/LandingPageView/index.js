import React from 'react';
import Page from 'src/components/Page';
import { makeStyles } from '@material-ui/core/styles';
import Footer from 'src/components/Common/Footer';
import PerfectGift from './PerfectGift';
import Infomation from './Infomation';
//import ImagesConfig from 'src/layouts/Common/Images';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.main
  },
  content: {
    backgroundColor: theme.palette.background.main,
    /*backgroundImage: `url(${ImagesConfig.home})`,
    backgroundSize: '49.8% 44%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right top',
    marginRight: 22,
    marginLeft: 22,*/
    padding: '115px 0px 0px 0px',
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
function LandingPageView() {
  const classes = useStyles();
  return (
    <Page title="Suregifts Customer" id="move_top" className={classes.root}>
      <div className={classes.content}>
        <PerfectGift />
      </div>
      <div className={classes.fullContainer}>
        <Infomation />
      </div>
      <div className={classes.bottomContainer}>
        <Footer />
      </div>
    </Page>
  );
}
export default LandingPageView;

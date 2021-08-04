import React from 'react';
import Page from 'src/components/Page';
import { makeStyles } from '@material-ui/core/styles';
import Footer from 'src/components/Common/Footer';
import SignUp from './SignUp';
import HowItWorks from './HowItWorks';
import UsersMap from './UsersMap';
import ImagesConfig from 'src/layouts/Common/Images';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    background: theme.palette.background.main,
    backgroundImage: `url(${ImagesConfig.mRight})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    minHeight: 900
  },
  content: {
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
  }
}));

function MerchantSignUp() {
  const classes = useStyles();
  return (
    <Page title="Suregifts Customer" id="move_top" className={classes.root}>
      <div className={classes.content}>
        <SignUp />
        <HowItWorks />
        <UsersMap />
      </div>
      <div className={classes.bottomContainer}>
        <Footer />
      </div>
    </Page>
  );
}
export default MerchantSignUp;

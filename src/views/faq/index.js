import React from 'react';
import Page from 'src/components/Page';
import { makeStyles } from '@material-ui/core/styles';
import Footer from 'src/components/Common/Footer';
import ImagesConfig from 'src/layouts/Common/Images';
import { Divider } from '@material-ui/core';
import FaqTop from './FaqTop';
import FaqList from './FaqList';
import DeliveryList from './DeliveryList';
import ReturnsList from './ReturnsList';

// --------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    background: theme.palette.background.main,
    backgroundImage: `url(${ImagesConfig.faq})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%'
  },
  content: {
    padding: '171px 0px 0px 0px',
    [theme.breakpoints.down('md')]: {
      padding: '65px 0px 0px 0px'
    }
  },
  middleContent: {
    background: theme.palette.background.main
  },
  bottomContainer: {
    background: theme.palette.background.main,
    padding: '150px 0px 100px 0px',
    [theme.breakpoints.down('md')]: {
      padding: '90px 0px 100px 0px'
    }
  },
  dividerSec: {
    marginBottom: 107,
    marginTop: 27,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 50,
      marginTop: 0
    }
  }
}));

function Faq() {
  const classes = useStyles();
  return (
    <Page title="Suregifts Customer" id="move_top" className={classes.root}>
      <div className={classes.content}>
        <FaqTop />
      </div>
      <div className={classes.middleContent}>
        <FaqList />
        <Divider className={classes.dividerSec} />
        <DeliveryList />
        <Divider className={classes.dividerSec} />
        <ReturnsList />
      </div>
      <div className={classes.bottomContainer}>
        <Footer />
      </div>
    </Page>
  );
}
export default Faq;

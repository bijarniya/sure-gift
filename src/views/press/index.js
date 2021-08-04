import React from 'react';
import Page from 'src/components/Page';
import { makeStyles } from '@material-ui/core/styles';
import Footer from 'src/components/Common/Footer';
import PressCard from './PressCard';
import Supergifts from './SuperGifts';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.main,
    height: '100%'
  },
  content: {
    backgroundColor: theme.palette.background.main,
    padding: '200px 0px 0px 0px',
    [theme.breakpoints.down('md')]: {
      padding: '100px 0px 0px 0px'
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

function Press() {
  const classes = useStyles();

  return (
    <Page title="Press" id="move_top" className={classes.root}>
      <div className={classes.content}>
        <PressCard />
        <Supergifts />
      </div>
      <div className={classes.bottomContainer}>
        <Footer />
      </div>
    </Page>
  );
}
export default Press;

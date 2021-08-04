import React from 'react';
import Page from 'src/components/Page';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Container, Grid } from '@material-ui/core';
import MerchantFilters from './MerchantFilters';
import MerchantList from './MerchantList';
import Footer from 'src/components/Common/Footer';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.main,
    height: '100%'
  },
  content: {
    backgroundColor: theme.palette.background.main,
    padding: '150px 0px 0px 0px',
    [theme.breakpoints.down('md')]: {
      padding: '65px 0px 0px 0px'
    }
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  middleContainer: {
    backgroundColor: theme.palette.background.main,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 50,
    [theme.breakpoints.between('sm', 'md')]: {
      flexDirection: 'row'
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  heading: {
    width: '100%',
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 30,
    fontWeight: 700,
    lineHeight: '130%',
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
      width: '100%',
      textAlign: 'center',
      marginTop: 30
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
function MerchantLocation() {
  const classes = useStyles();
  return (
    <Page title="Suregifts Customer" id="move_top" className={classes.root}>
      <div className={classes.content}>
        <Container maxWidth="lg" className={clsx(classes.container)}>
          <Grid item xs={12} className={clsx(classes.heading)}>
            Merchant Location
          </Grid>
          <Grid item xs={12} className={clsx(classes.middleContainer)}>
            <MerchantFilters />
            <MerchantList />
          </Grid>
        </Container>
      </div>
      <div className={classes.bottomContainer}>
        <Footer />
      </div>
    </Page>
  );
}
export default MerchantLocation;

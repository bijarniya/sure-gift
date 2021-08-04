import React from 'react';
import Page from 'src/components/Page';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Container, Grid } from '@material-ui/core';
import Category from './Category';
import CreateGiftCard from './CreateGiftCard';
import GiftFooter from 'src/components/Common/GiftFooter';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  content: {
    padding: '106px 0px 0px 0px',
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
  }
}));
function CustomizeGiftCard() {
  const classes = useStyles();
  return (
    <Page title="Suregifts Customer" id="move_top" className={classes.root}>
      <div className={classes.content}>
        <Container maxWidth="lg" className={clsx(classes.container)}>
          <Grid item xs={12} className={clsx(classes.middleContainer)}>
            <Category />
            <CreateGiftCard />
          </Grid>
          <Grid item xs={12}>
            <GiftFooter activeStep={1} />
          </Grid>
        </Container>
      </div>
    </Page>
  );
}
export default CustomizeGiftCard;

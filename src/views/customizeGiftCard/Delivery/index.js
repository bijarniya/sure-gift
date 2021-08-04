import React, { useState } from 'react';
import Page from 'src/components/Page';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Container, Grid, Box } from '@material-ui/core';
import GiftFooter from 'src/components/Common/GiftFooter';
import DeliveryTabs from './DeliveryTabs';
import SendEmailStep from './SendEmailStep';
import PrintStep from './PrintStep';
import HomeStep from './HomeStep';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  content: {
    padding: '150px 0px 0px 0px',
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
    flexDirection: 'column',
    padding: '0% 22%',
    minHeight: 400
  },
  title: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontSize: 20,
    fontWeight: 700
  }
}));

function DeliveryMethid() {
  const classes = useStyles();
  const [deliveryStep, setDeliveryStep] = useState(1);

  const handleSteps = (steps) => {
    setDeliveryStep(steps);
  };
  return (
    <Page title="Suregifts Customer" id="move_top" className={classes.root}>
      <div className={classes.content}>
        <Container maxWidth="lg" className={clsx(classes.container)}>
          <Grid item xs={12} className={classes.middleContainer}>
            <Box className={classes.title}>Delivery Method</Box>
            <DeliveryTabs
              deliveryStep={deliveryStep}
              handleSteps={handleSteps}
            />
            {
              {
                1: <SendEmailStep />,
                2: <PrintStep />,
                3: <HomeStep />
              }[deliveryStep]
            }
          </Grid>
          <Grid item xs={12}>
            <GiftFooter activeStep={2} />
          </Grid>
        </Container>
      </div>
    </Page>
  );
}
export default DeliveryMethid;

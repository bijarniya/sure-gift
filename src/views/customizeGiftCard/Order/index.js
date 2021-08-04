import React, { useState } from 'react';
import Page from 'src/components/Page';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Container, Grid } from '@material-ui/core';
import GiftFooter from 'src/components/Common/GiftFooter';
import { useDialogBox } from 'src/components/popup/common/useDialogBox';
import OpenDialog from 'src/components/popup/common/OpenDialog';
import OrderSummary from './OrderSummary';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  content: {
    padding: '106px 0px 0px 0px',
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
    flexDirection: 'row',
    [theme.breakpoints.between('sm', 'md')]: {
      flexDirection: 'row'
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  successfullPopup: {
    width: '490px',
    minHeight: '200px',
    background: 'rgba(0, 0, 0, 0.8)',
    borderRadius: '35px',
    border: `1px ${theme.palette.text.primary} solid`
  }
}));
function Order() {
  const classes = useStyles();

  // popup start
  const { dialogBoxName, openDialogBox, closeDialogBox } = useDialogBox();
  const [selectedData, setData] = useState();

  // popup list data
  const popupList = [
    {
      title: '',
      Description: 'Order Successful',
      popup: 'successfullPopup'
    },
    {
      title: '',
      Description: 'Payment Failed',
      popup: 'paymentFailedPopup'
    }
  ];
  // set popup data
  const setSelectedData = (popupName) => {
    const filterData = popupList.filter((item) => {
      return item.popup === popupName || item.title === popupName;
    });
    if (filterData && filterData.length) {
      setData(filterData[0]);
    }
  };
  // set dynamic popup name
  const openPopup = (popupName) => {
    openDialogBox(popupName);
    setSelectedData(popupName);
  };

  const confirmRemove = () => {};
  // popup end

  const handleButton = (type) => {
    openPopup(type);
  };

  return (
    <Page title="Suregifts Customer" id="move_top" className={classes.root}>
      <div className={classes.content}>
        <Container maxWidth="lg" className={clsx(classes.container)}>
          <Grid item xs={12} className={clsx(classes.middleContainer)}>
            <OrderSummary />
          </Grid>
          <Grid item xs={12}>
            <GiftFooter activeStep={3} handleButton={handleButton} />
          </Grid>
        </Container>
      </div>
      {!!dialogBoxName && (
        <OpenDialog
          componentName={dialogBoxName}
          open={true}
          closeBox={closeDialogBox}
          data={selectedData}
          onRemove={() => confirmRemove()}
          containerStyle={
            dialogBoxName === 'successfullPopup' ||
            dialogBoxName === 'paymentFailedPopup'
              ? classes.successfullPopup
              : ''
          }
          center={true}
        />
      )}
    </Page>
  );
}
export default Order;

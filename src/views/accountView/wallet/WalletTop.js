import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography } from '@material-ui/core';
import Icons from 'src/components/Icons';
import clsx from 'clsx';
import { useDialogBox } from 'src/components/popup/common/useDialogBox';
import OpenDialog from 'src/components/popup/common/OpenDialog';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  leftBox: {
    background: `conic-gradient(${theme.palette.background.conic})`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 320,
    height: '225.88px',
    borderRadius: '25px',
    padding: '8.07px 8px'
  },
  leftBoxLine: {
    border: `3px solid  ${theme.palette.background.main}`,
    height: '100%',
    width: '100%',
    borderRadius: '20px',
    padding: '25.9px 20px 30.82px 30px'
  },
  rightBox: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 30,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      width: '80%'
    }
  },
  starCls: {
    marginTop: '15%',
    marginLeft: '42%'
  },
  hawkins: {
    color: theme.palette.background.main,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 700,
    fontSize: 24,
    marginTop: 30
  },
  balance: {
    color: theme.palette.text.gray,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 400,
    fontSize: 10,
    marginTop: 10
  },
  amount: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 700,
    fontSize: 44,
    marginTop: 2
  },
  topUp: {
    color: theme.palette.text.gray,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 400,
    fontSize: 10,
    marginTop: 30
  },
  paymentBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  payPalBox: {
    background: theme.palette.background.secondary,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    height: 76,
    width: 193,
    padding: '18px 15px 18px 15px',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      marginTop: 10,
      width: '100%'
    }
  },
  cardIcons: {},
  title: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 600,
    fontSize: 16,
    marginLeft: 15
  },
  marginCard: {
    marginRight: 10,
    [theme.breakpoints.down('sm')]: {
      marginRight: 0
    }
  },
  addNewEventSec: {
    width: '555px',
    minHeight: '300px',
    background: 'rgba(0, 0, 0, 0.8)',
    borderRadius: '35px',
    border: `1px ${theme.palette.text.primary} solid`
  }
}));

function WalletTop() {
  const classes = useStyles();

  // popup start
  const { dialogBoxName, openDialogBox, closeDialogBox } = useDialogBox();
  const [selectedData, setData] = useState();
  // popup list data
  const popupList = [
    {
      title: 'Bank Deposit',
      Description: 'Bank Deposit',
      popup: 'bankDepositPopup'
    },
    {
      title: 'Paypal',
      Description: 'Paypal',
      popup: 'paypalPopup'
    },
    {
      title: '',
      Description: '',
      popup: 'paymentSuccessfulPopup'
    }
  ];
  // set popup data
  const setSelectedData = (popupName, row) => {
    const filterData = popupList.filter((item) => {
      return item.popup === popupName || item.title === popupName;
    });
    if (filterData && filterData.length) {
      filterData[0].merchantData = row;
      setData(filterData[0]);
    }
  };
  // set dynamic popup name
  const openPopup = (popupName, row) => {
    openDialogBox(popupName);
    setSelectedData(popupName, row);
  };

  const confirmRemove = (type) => {
    setTimeout(() => {
      openPopup(type);
    }, 0);
  };
  // popup end

  const handleButton = (type) => {
    openPopup(type);
  };

  return (
    <Grid container>
      <Grid item xs={12} className={classes.root}>
        <Grid className={classes.leftBox}>
          <Box className={classes.leftBoxLine}>
            <Icons url={'walletLogo'} />
            <Icons url={'starIcon'} className={classes.starCls} />
            <Typography className={classes.hawkins}>Guy Hawkins </Typography>
          </Box>
        </Grid>
        <Grid className={classes.rightBox}>
          <Typography className={classes.balance}>Balance </Typography>
          <Typography className={classes.amount}>N 40,000.00 </Typography>
          <Typography className={classes.topUp}>Top-Up Wallet VIA: </Typography>

          <Box className={classes.paymentBox}>
            <Grid className={clsx(classes.payPalBox, classes.marginCard)}>
              <Icons url={'cardPayment'} className={classes.cardIcons} />
              <Typography className={classes.title}>Card Payment</Typography>
            </Grid>
            <Grid
              className={clsx(classes.payPalBox, classes.marginCard)}
              onClick={() => handleButton('paypalPopup')}
            >
              <Icons url={'payPalIcon'} className={classes.cardIcons} />
              <Typography className={classes.title}>Paypal</Typography>
            </Grid>
            <Grid
              className={classes.payPalBox}
              onClick={() => handleButton('bankDepositPopup')}
            >
              <Icons url={'deleteIcon'} className={classes.cardIcons} />
              <Typography className={classes.title}>Bank Transfer</Typography>
            </Grid>
          </Box>
        </Grid>
        {!!dialogBoxName && (
          <OpenDialog
            componentName={dialogBoxName}
            open={true}
            closeBox={closeDialogBox}
            data={selectedData}
            onRemove={confirmRemove}
            containerStyle={classes.addNewEventSec}
            center={true}
          />
        )}
      </Grid>
    </Grid>
  );
}
export default WalletTop;

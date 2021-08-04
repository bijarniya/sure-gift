import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Grid, Typography, Box, Divider } from '@material-ui/core';
import Icons from 'src/components/Icons';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '31%',
    paddingLeft: 30
  },
  heading: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 700,
    fontSize: 20
  },
  marTop: {
    marginTop: 20
  },
  cardBox: {
    marginTop: 20,
    height: 76,
    display: 'flex',
    flexDirection: 'row',
    background: `conic-gradient(${theme.palette.background.conic})`,
    padding: 1,
    borderRadius: 20
  },
  cardBoxInner: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
    background: theme.palette.background.secondary,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '0px 15px',
    cursor: 'pointer'
  },
  cardIcons: {},
  title: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 600,
    fontSize: 16,
    marginLeft: 15,
    width: '76%'
  },
  payPalBox: {
    marginTop: 10,
    height: 76,
    display: 'flex',
    flexDirection: 'row',
    background: theme.palette.background.secondary,
    padding: 1,
    borderRadius: 20
  },
  orderABox: {
    marginTop: 30
  },
  amountSummary: {
    marginTop: 20,
    padding: '5px 20px 30px 20px',
    background: theme.palette.background.secondary,
    borderRadius: '20px'
  },
  amountBox: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20
  },
  amountTitle: {
    color: theme.palette.text.gray,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 400,
    fontSize: 14,
    width: '50%'
  },
  amount: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 400,
    fontSize: 14,
    width: '50%',
    textAlign: 'right'
  },
  colrSec: {
    color: '#92FBB3'
  },
  diviSec: {
    marginTop: 30
  },
  totalBox: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 30
  },
  totalTitle: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 700,
    fontSize: 18,
    width: '50%'
  },
  total: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 700,
    fontSize: 18,
    width: '50%',
    textAlign: 'right'
  },
  checkBoxIcon: {
    cursor: 'pointer'
  },
  activeCheckBox: {
    background: `conic-gradient(${theme.palette.background.conic})`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    width: 24,
    height: 24
  }
}));
function PaymentMethod() {
  const classes = useStyles();
  const [paymentMode, setPaymentMode] = useState(1);

  const handlePaymentMode = (mode) => {
    mode === paymentMode ? setPaymentMode('') : setPaymentMode(mode);
  };

  return (
    <Grid className={clsx(classes.root)}>
      <Typography className={clsx(classes.heading)}>Order Summary</Typography>
      <Grid
        className={clsx(
          classes.marginTop,
          paymentMode === 1 ? classes.cardBox : classes.payPalBox
        )}
      >
        <Box
          className={classes.cardBoxInner}
          onClick={() => handlePaymentMode(1)}
        >
          <Icons url={'cardPayment'} className={classes.cardIcons} />
          <Typography className={classes.title}>Card Payment</Typography>

          {paymentMode === 1 ? (
            <Box className={classes.activeCheckBox}>
              <Icons url={'activeCheckMark'} className={classes.checkBoxIcon} />
            </Box>
          ) : (
            <Icons url={'emptyIcon'} className={classes.checkBoxIcon} />
          )}
        </Box>
      </Grid>
      <Grid className={paymentMode === 2 ? classes.cardBox : classes.payPalBox}>
        <Box
          className={classes.cardBoxInner}
          onClick={() => handlePaymentMode(2)}
        >
          <Icons url={'payPalIcon'} className={classes.cardIcons} />
          <Typography className={classes.title}>Paypal</Typography>
          {paymentMode === 2 ? (
            <Box className={classes.activeCheckBox}>
              <Icons url={'activeCheckMark'} className={classes.checkBoxIcon} />
            </Box>
          ) : (
            <Icons url={'emptyIcon'} className={classes.checkBoxIcon} />
          )}
        </Box>
      </Grid>
      <Grid className={paymentMode === 3 ? classes.cardBox : classes.payPalBox}>
        <Box
          className={classes.cardBoxInner}
          onClick={() => handlePaymentMode(3)}
        >
          <Icons url={'deleteIcon'} className={classes.cardIcons} />
          <Typography className={classes.title}>Bank Transfer</Typography>
          {paymentMode === 3 ? (
            <Box className={classes.activeCheckBox}>
              <Icons url={'activeCheckMark'} className={classes.checkBoxIcon} />
            </Box>
          ) : (
            <Icons url={'emptyIcon'} className={classes.checkBoxIcon} />
          )}
        </Box>
      </Grid>
      <Grid className={classes.orderABox}>
        <Typography className={classes.heading}>Order Amount</Typography>
      </Grid>
      <Grid className={classes.amountSummary}>
        <Box className={classes.amountBox}>
          <Box className={classes.amountTitle}>Subtotal</Box>
          <Box className={classes.amount}>$500</Box>
        </Box>
        <Box className={classes.amountBox}>
          <Box className={classes.amountTitle}>Shipping</Box>
          <Box className={classes.amount}>$10</Box>
        </Box>
        <Box className={classes.amountBox}>
          <Box className={clsx(classes.amountTitle, classes.colrSec)}>
            Coupon
          </Box>
          <Box className={clsx(classes.amount, classes.colrSec)}>-$400</Box>
        </Box>
        <Box className={classes.amountBox}>
          <Box className={clsx(classes.amountTitle, classes.colrSec)}>
            Wallet
          </Box>
          <Box className={clsx(classes.amount, classes.colrSec)}>- $330</Box>
        </Box>
        <Divider className={classes.diviSec} />
        <Box className={classes.totalBox}>
          <Box className={classes.totalTitle}>Total</Box>
          <Box className={classes.total}>$930</Box>
        </Box>
      </Grid>
    </Grid>
  );
}
export default PaymentMethod;

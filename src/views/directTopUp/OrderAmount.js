import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Grid, Typography, Box, Divider, TextField } from '@material-ui/core';
import Icons from 'src/components/Icons';
import ButtonLoading from 'src/components/Common/ButtonLoading';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '31%',
    paddingLeft: 30,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: '100%',
      paddingLeft: 0
    }
  },
  heading: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 700,
    fontSize: 20,
    marginTop: 30
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
    marginTop: 0
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
  buttonOuter: {
    display: 'flex',
    flexDirection: 'row',
    background: theme.palette.text.primary,
    borderRadius: 18,
    padding: 0,
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  buttonInner: {
    background: theme.palette.text.primary,
    border: `0px solid ${theme.palette.text.primary}`,
    color: theme.palette.text.dark,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 14,
    boxShadow: 'none',
    borderRadius: 18,
    fontWeight: 400,
    margin: 0,
    padding: '29px 0px 29px 20px',
    '&:hover': {
      background: theme.palette.text.primary,
      boxShadow: 'none',
      borderRadius: 18
    },
    [theme.breakpoints.down('md')]: {
      padding: '29px 0px 29px 20px'
    }
  },
  prefectButton: {
    marginTop: 30,
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%'
    }
  },
  emailOuter: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20
  },
  textField: {},
  input: {
    border: '1px solid rgba(255, 255, 255, 0.3)',
    fontFamily: theme.palette.font.fontFamily,
    color: theme.palette.text.primary,
    fontWeight: 600,
    fontSize: 16,
    borderRadius: 12,
    height: 50
  },
  labelText: {
    fontFamily: theme.palette.font.fontFamily,
    color: theme.palette.text.primary,
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 10,
    display: 'block'
  },
  codeOuter: {
    marginBottom: 20
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

function OrderAmount() {
  const classes = useStyles();
  const [paymentMode, setPaymentMode] = useState(1);

  const handlePaymentMode = (mode) => {
    mode === paymentMode ? setPaymentMode('') : setPaymentMode(mode);
  };

  const handleButton = () => {};

  return (
    <Grid className={clsx(classes.root)}>
      <Grid className={classes.orderABox}>
        <Typography className={classes.heading}>Order Amount</Typography>
      </Grid>
      <Grid className={classes.amountSummary}>
        <Box className={classes.amountBox}>
          <Box className={classes.amountTitle}>Sub Total</Box>
          <Box className={classes.amount}>$500</Box>
        </Box>
        <Box className={classes.amountBox}>
          <Box className={classes.amountTitle}>Sur-Charge</Box>
          <Box className={classes.amount}>$10</Box>
        </Box>
        <Divider className={classes.diviSec} />
        <Box className={classes.totalBox}>
          <Box className={classes.totalTitle}>Total</Box>
          <Box className={classes.total}>$610</Box>
        </Box>
      </Grid>

      <Typography className={clsx(classes.heading)}>Payment Method</Typography>

      <Grid className={paymentMode === 1 ? classes.cardBox : classes.payPalBox}>
        <Box
          className={classes.cardBoxInner}
          onClick={() => handlePaymentMode(1)}
        >
          <Icons url={'deleteIcon'} className={classes.cardIcons} />
          <Typography className={classes.title}>Voucher Payment</Typography>
          {paymentMode === 1 ? (
            <Box className={classes.activeCheckBox}>
              <Icons url={'activeCheckMark'} className={classes.checkBoxIcon} />
            </Box>
          ) : (
            <Icons url={'emptyIcon'} className={classes.checkBoxIcon} />
          )}
        </Box>
      </Grid>
      <Grid
        className={classes.codeOuter}
        style={{ display: paymentMode === 1 ? 'block' : 'none' }}
      >
        <Grid className={classes.emailOuter}>
          <label className={classes.labelText}>Voucher Code:</label>
          <TextField
            fullWidth
            type="text"
            placeholder="Enter voucher code"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            InputProps={{
              className: classes.input
            }}
          />
        </Grid>
        <Grid className={classes.emailOuter}>
          <label className={classes.labelText}>Security code:</label>
          <TextField
            fullWidth
            type="text"
            placeholder="Enter security code"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            InputProps={{
              className: classes.input
            }}
          />
        </Grid>
      </Grid>

      <Grid
        className={clsx(
          classes.marginTop,
          paymentMode === 2 ? classes.cardBox : classes.payPalBox
        )}
      >
        <Box
          className={classes.cardBoxInner}
          onClick={() => handlePaymentMode(2)}
        >
          <Icons url={'cardPayment'} className={classes.cardIcons} />
          <Typography className={classes.title}>Card Payment</Typography>

          {paymentMode === 2 ? (
            <Box className={classes.activeCheckBox}>
              <Icons url={'activeCheckMark'} className={classes.checkBoxIcon} />
            </Box>
          ) : (
            <Icons url={'emptyIcon'} className={classes.checkBoxIcon} />
          )}
        </Box>
      </Grid>
      <Grid className={classes.prefectButton}>
        <ButtonLoading
          title={'Pay with Voucher'}
          handleClick={handleButton}
          container={classes.buttonOuter}
          buttonClass={classes.buttonInner}
        />
      </Grid>
    </Grid>
  );
}
export default OrderAmount;

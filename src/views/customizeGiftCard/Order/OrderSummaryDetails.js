import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
  Grid,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  Typography,
  Box,
  TextField,
  Checkbox
} from '@material-ui/core';
import Icons from 'src/components/Icons';
import ImagesConfig from 'src/layouts/Common/Images';
import ButtonLoading from 'src/components/Common/ButtonLoading';

// ----------------------------------------------------------------------
const INVOICES = [
  {
    id: 1,
    orderNo: '00234567',
    title: 'Lavien Spa',
    description: 'Spa and Health Club',
    name: 'James Agbalumo',
    email: 'Home Delivery',
    amount: 400,
    bonus: 200
  },
  {
    id: 2,
    orderNo: '00234567',
    title: 'Lavien Spa',
    description: 'Spa and Health Club',
    name: 'James Agbalumo',
    email: 'Email',
    amount: 400,
    bonus: 200
  },
  {
    id: 3,
    orderNo: '00234567',
    title: 'Lavien Spa',
    description: 'Spa and Health Club',
    name: '',
    email: 'Home Delivery',
    amount: 400,
    bonus: 200
  },
  {
    id: 4,
    orderNo: '00234567',
    title: 'Lavien Spa',
    description: 'Spa and Health Club',
    name: 'James Agbalumo',
    email: 'Email',
    amount: 400,
    bonus: 200
  }
];

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '69%'
  },
  heading: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 700,
    fontSize: 20
  },
  container: {
    marginTop: 15
  },
  tableHeadRow: {
    background: theme.palette.background.main,
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.gray,
    fontSize: 10,
    fontWeight: 400,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    boxShadow: 'inset 0px 0 0 #000000 !important'
  },
  tableCellPadding: {
    paddingLeft: 20
  },
  tableRow: {
    marginBottom: 20,
    background: theme.palette.background.secondary,
    borderRadius: '20px !important',
    width: '100%',
    height: 100,
    display: 'flex'
  },
  titleCellWidth: {
    width: '35%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  recipientCellWidth: {
    width: '17%'
  },
  amountCellWidth: {
    width: '11%'
  },
  moreCellWidth: {
    width: '9%',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headTRow: {
    display: 'flex'
  },
  commonSt: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontSize: 14,
    fontWeight: 400,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  giftTitle: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontSize: 16,
    fontWeight: 700
  },
  giftDesc: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.gray,
    fontSize: 12,
    fontWeight: 400,
    marginTop: 5
  },
  giftInfo: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 20
  },
  giftContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  bottomContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginTop: 30
  },
  leftBox: {
    display: 'flex',
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 30
  },
  rightBox: {
    display: 'flex',
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  giftButtonInner: {
    background: theme.palette.background.activeMenu,
    border: `0px solid ${theme.palette.background.activeMenu}`,
    color: theme.palette.text.primay,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 14,
    boxShadow: 'none',
    borderRadius: 18,
    fontWeight: 400,
    margin: 0,
    padding: '16px 19px',
    '&:hover': {
      background: theme.palette.background.activeMenu,
      boxShadow: 'none',
      borderRadius: 18
    },
    [theme.breakpoints.down('md')]: {
      padding: '0px 0px'
    }
  },
  addGiftButtonOuter: {
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'row',
    background: theme.palette.text.activeMenu,
    borderRadius: 20,
    padding: 0,
    width: 130,
    [theme.breakpoints.down('md')]: {
      width: 130
    }
  },
  input: {
    width: 210,
    height: 52,
    borderRadius: 12,
    color: theme.palette.text.gray,
    fontFamily: 'Proxima Nova',
    fontWeight: 600,
    fontSize: 16,
    '&::placeholder': {
      color: theme.palette.text.gray
    }
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      border: '1px solid rgba(255, 255, 255, 0.3) !important'
    }
  },
  cssFocused: {},
  notchedOutline: {
    border: '1px solid rgba(255, 255, 255, 0.3) !important'
  },

  walletSec: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.gray,
    fontSize: 16,
    fontWeight: 400
  },
  priceSec: {
    color: theme.palette.text.primary
  },
  checkBox: {
    color: '#FF9F47 !important',
    '& .checked': {
      color: '#FF9F47 !important'
    }
  }
}));
function OrderSummaryDetails() {
  const classes = useStyles();
  const [state, setState] = useState({ wallet: true, couponCode: '' });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]:
        event.target.name === 'wallet'
          ? event.target.checked
          : event.target.value
    });
  };

  return (
    <Grid className={classes.root}>
      <Typography className={clsx(classes.heading)}>Order Summary</Typography>
      <TableContainer
        sx={{ minWidth: 640 }}
        className={clsx(classes.container)}
      >
        <Table>
          <TableHead>
            <TableRow className={clsx(classes.headTRow)}>
              <TableCell
                className={clsx(
                  classes.titleCellWidth,
                  classes.tableHeadRow,
                  classes.tableCellPadding
                )}
              >
                Item
              </TableCell>
              <TableCell
                className={clsx(
                  classes.recipientCellWidth,
                  classes.tableHeadRow
                )}
              >
                Recipient
              </TableCell>
              <TableCell
                className={clsx(
                  classes.recipientCellWidth,
                  classes.tableHeadRow
                )}
              >
                Recipient
              </TableCell>
              <TableCell
                className={clsx(classes.amountCellWidth, classes.tableHeadRow)}
              >
                Gift Value
              </TableCell>
              <TableCell
                className={clsx(classes.amountCellWidth, classes.tableHeadRow)}
              >
                Bonus
              </TableCell>
              <TableCell
                className={clsx(classes.moreCellWidth, classes.tableHeadRow)}
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {INVOICES.map((row) => (
              <TableRow key={row.id} className={clsx(classes.tableRow)}>
                <TableCell
                  className={clsx(
                    classes.titleCellWidth,
                    classes.tableCellPadding
                  )}
                >
                  <Box className={classes.giftContainer}>
                    <Box component="img" alt="" src={ImagesConfig.img97} />
                    <Box className={classes.giftInfo}>
                      <Typography className={classes.giftTitle}>
                        {row.title}
                      </Typography>
                      <Typography className={classes.giftDesc}>
                        {' '}
                        {row.description}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell
                  className={clsx(classes.recipientCellWidth, classes.commonSt)}
                >
                  {row.name}
                </TableCell>
                <TableCell
                  className={clsx(classes.recipientCellWidth, classes.commonSt)}
                >
                  {row.email}
                </TableCell>
                <TableCell
                  className={clsx(classes.amountCellWidth, classes.commonSt)}
                >
                  {row.amount}
                </TableCell>
                <TableCell
                  className={clsx(classes.amountCellWidth, classes.commonSt)}
                >
                  {row.bonus}
                </TableCell>
                <TableCell className={clsx(classes.moreCellWidth)}>
                  <Icons url={'moreIcon'} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid className={classes.bottomContainer}>
        <Box className={classes.leftBox}>
          <Box>
            <Checkbox
              checked={state.wallet}
              onChange={handleChange}
              name="wallet"
              classes={{
                root: classes.checkBox,
                checked: classes.checkBox
              }}
            />
          </Box>
          <Box className={classes.walletSec}>
            Wallet: <span className={classes.priceSec}> $1,404</span>
          </Box>
        </Box>
        <Box className={classes.rightBox}>
          <Box>
            <TextField
              fullWidth
              type="text"
              value={state.couponCode}
              name="couponCode"
              onChange={handleChange}
              placeholder="Enter Coupon"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              InputProps={{
                className: classes.input,
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline
                }
              }}
            />
          </Box>
          <ButtonLoading
            title={'Apply Coupon'}
            handleClick={() => ''}
            container={classes.addGiftButtonOuter}
            buttonClass={classes.giftButtonInner}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
export default OrderSummaryDetails;

import React from 'react';
import faker from 'faker';
import Scrollbars from 'src/components/Scrollbars';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  Typography
} from '@material-ui/core';
import PaginationList from 'src/components/PaginationList';
import clsx from 'clsx';

// ----------------------------------------------------------------------

const INVOICES = [
  {
    id: faker.random.uuid(),
    orderNo: '00234567',
    date: '15.9.21',
    details: 'Wallet Top-up via Bank Transfer',
    type: 'Credit',
    amount: '20,000'
  },
  {
    id: faker.random.uuid(),
    orderNo: '00234567',
    date: '15.9.21',
    details: 'Wallet Top-up via Bank Transfer',
    type: 'Credit',
    amount: '20,000'
  },
  {
    id: faker.random.uuid(),
    orderNo: '00234567',
    date: '15.9.21',
    details: 'Wallet Top-up via Bank Transfer',
    type: 'Credit',
    amount: '20,000'
  },
  {
    id: faker.random.uuid(),
    orderNo: '00234567',
    date: '15.9.21',
    details: 'Wallet Top-up via Bank Transfer',
    type: 'Credit',
    amount: '20,000'
  },
  {
    id: faker.random.uuid(),
    orderNo: '00234567',
    date: '15.9.21',
    details: 'Wallet Top-up via Bank Transfer',
    type: 'Credit',
    amount: '20,000'
  },
  {
    id: faker.random.uuid(),
    orderNo: '00234567',
    date: '15.9.21',
    details: 'Wallet Top-up via Bank Transfer',
    type: 'Credit',
    amount: '20,000'
  },
  {
    id: faker.random.uuid(),
    orderNo: '00234567',
    date: '15.9.21',
    details: 'Wallet Top-up via Bank Transfer',
    type: 'Credit',
    amount: '20,000'
  },
  {
    id: faker.random.uuid(),
    orderNo: '00234567',
    date: '15.9.21',
    details: 'Wallet Top-up via Bank Transfer',
    type: 'Credit',
    amount: '20,000'
  }
];
// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {},
  topContainer: {
    background: theme.palette.background.secondary,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 30,
    marginTop: 40,
    padding: '40px 50px 50px 50px',
    [theme.breakpoints.down('sm')]: {
      padding: '30px 15px 30px 15px'
    }
  },
  headingContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  },
  heading: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontSize: 24,
    fontWeight: 700,
    width: '100%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      fontSize: 16
    }
  },
  tableHeadRow: {
    background: theme.palette.background.secondary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.gray,
    fontWeight: 400,
    fontSize: 10,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    boxShadow: 'inset 0px 0 0 #000000 !important',
    paddingLeft: '0px !important'
  },
  tableBodyRow: {
    background: theme.palette.background.secondary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontWeight: 400,
    fontSize: 16,
    paddingLeft: '0px !important'
  },
  paginationSec: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textSec: {
    textAlign: 'right'
  }
}));

function WalletList() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} className={classes.topContainer}>
        <Grid className={classes.headingContainer}>
          <Typography className={classes.heading}>Transactions</Typography>
        </Grid>
        <Scrollbars>
          <TableContainer sx={{ minWidth: 720, mt: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    className={classes.tableHeadRow}
                    style={{ width: '21%' }}
                  >
                    Date
                  </TableCell>
                  <TableCell
                    className={classes.tableHeadRow}
                    style={{ width: '48%' }}
                  >
                    Details
                  </TableCell>
                  <TableCell
                    className={classes.tableHeadRow}
                    style={{ width: '21%' }}
                  >
                    Transaction Type
                  </TableCell>
                  <TableCell
                    className={clsx(classes.tableHeadRow, classes.textSec)}
                    style={{ width: '21%' }}
                  >
                    Amount
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {INVOICES &&
                  INVOICES.length > 0 &&
                  INVOICES.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell className={classes.tableBodyRow}>
                        {row.date}
                      </TableCell>
                      <TableCell className={classes.tableBodyRow}>
                        {row.details}
                      </TableCell>
                      <TableCell className={classes.tableBodyRow}>
                        {row.type}
                      </TableCell>
                      <TableCell
                        className={clsx(classes.tableBodyRow, classes.textSec)}
                      >
                        {row.amount}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbars>
        <Grid className={classes.paginationSec}>
          <PaginationList />
        </Grid>
      </Grid>
    </Grid>
  );
}
export default WalletList;

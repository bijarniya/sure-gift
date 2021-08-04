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
  TableContainer
} from '@material-ui/core';
import PaginationList from 'src/components/PaginationList';
import clsx from 'clsx';

// ----------------------------------------------------------------------
const INVOICES = [
  {
    id: faker.random.uuid(),
    orderNo: '00234567',
    date: '15.9.21',
    name: 'Jumia',
    amount: '20,000'
  },
  {
    id: faker.random.uuid(),
    orderNo: '00234567',
    date: '15.9.21',
    name: 'Jumia',
    amount: '20,000'
  },
  {
    id: faker.random.uuid(),
    orderNo: '00234567',
    date: '15.9.21',
    name: 'Jumia',
    amount: '20,000'
  },
  {
    id: faker.random.uuid(),
    orderNo: '00234567',
    date: '15.9.21',
    name: 'Jumia',
    amount: '20,000'
  },
  {
    id: faker.random.uuid(),
    orderNo: '00234567',
    date: '15.9.21',
    name: 'Jumia',
    amount: '20,000'
  },
  {
    id: faker.random.uuid(),
    orderNo: '00234567',
    date: '15.9.21',
    name: 'Jumia',
    amount: '20,000'
  },
  {
    id: faker.random.uuid(),
    orderNo: '00234567',
    date: '15.9.21',
    name: 'Jumia',
    amount: '20,000'
  },
  {
    id: faker.random.uuid(),
    orderNo: '00234567',
    date: '15.9.21',
    name: 'Jumia',
    amount: '20,000'
  }
];
// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  topContainer: {
    marginTop: 40,
    paddingLeft: 50,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 15
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
  textSec: {
    textAlign: 'right'
  },
  paginationSec: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

function CheckVoucherList() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} className={classes.topContainer}>
        <Scrollbars>
          <TableContainer sx={{ minWidth: 720, mt: 0 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    className={classes.tableHeadRow}
                    style={{ width: '30%' }}
                  >
                    Date
                  </TableCell>
                  <TableCell
                    className={classes.tableHeadRow}
                    style={{ width: '46%' }}
                  >
                    Merchant
                  </TableCell>
                  <TableCell
                    className={clsx(classes.tableHeadRow, classes.textSec)}
                    style={{ width: '24%' }}
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
                        {row.name}
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
      </Grid>
      <Grid item xs={12} className={classes.paginationSec}>
        <PaginationList />
      </Grid>
    </Grid>
  );
}
export default CheckVoucherList;

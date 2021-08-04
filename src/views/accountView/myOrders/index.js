import React from 'react';
import faker from 'faker';
import Scrollbars from 'src/components/Scrollbars';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Box,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  Typography
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Page from 'src/components/Page';
import PaginationList from 'src/components/PaginationList';
import clsx from 'clsx';
import { PATH_ACCOUNT_SHORT } from 'src/routes/paths';

// ----------------------------------------------------------------------

const INVOICES = [
  {
    id: faker.random.uuid(),
    orderNo: '00234567',
    date: '15.9.21',
    status: 1,
    email: 'georgia.young@example.com',
    name: 'Dianne Russell',
    amount: '20,000',
    qty: 1
  },
  {
    id: faker.random.uuid(),
    orderNo: '00234567',
    date: '15.9.21',
    status: 2,
    email: 'georgia.young@example.com',
    name: 'Dianne Russell',
    amount: '20,000',
    qty: 2
  },
  {
    id: faker.random.uuid(),
    orderNo: '00234567',
    date: '15.9.21',
    status: 3,
    email: 'georgia.young@example.com',
    name: 'Dianne Russell',
    amount: '20,000',
    qty: 4
  },
  {
    id: faker.random.uuid(),
    orderNo: '00234567',
    date: '15.9.21',
    status: 1,
    email: 'georgia.young@example.com',
    name: 'Dianne Russell',
    amount: '20,000',
    qty: 6
  },
  {
    id: faker.random.uuid(),
    orderNo: '00234567',
    date: '15.9.21',
    status: 2,
    email: 'georgia.young@example.com',
    name: 'Dianne Russell',
    amount: '20,000',
    qty: 1
  },
  {
    id: faker.random.uuid(),
    orderNo: '00234567',
    date: '15.9.21',
    status: 3,
    email: 'georgia.young@example.com',
    name: 'Dianne Russell',
    amount: '20,000',
    qty: 1
  },
  {
    id: faker.random.uuid(),
    orderNo: '00234567',
    date: '15.9.21',
    status: 1,
    email: 'georgia.young@example.com',
    name: 'Dianne Russell',
    amount: '20,000',
    qty: 1
  },
  {
    id: faker.random.uuid(),
    orderNo: '00234567',
    date: '15.9.21',
    status: 2,
    email: 'georgia.young@example.com',
    name: 'Dianne Russell',
    amount: '20,000',
    qty: 1
  }
];
// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {},
  topContainer: {
    background: theme.palette.background.secondary,
    borderRadius: 30,
    display: 'flex',
    flexDirection: 'column',
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
    width: '91%',
    [theme.breakpoints.down('md')]: {
      width: '82%',
      fontSize: 16
    }
  },
  count: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.gray,
    fontSize: 18,
    fontWeight: 400,
    [theme.breakpoints.down('md')]: {
      fontSize: 14
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
  pending: {
    color: theme.palette.order.pending
  },
  completed: {
    color: theme.palette.order.completed
  },
  cancelled: {
    color: theme.palette.order.cancelled
  },
  link: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    textDecoration: 'none'
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

function MyOrders() {
  const classes = useStyles();
  return (
    <Page title="Suregifts business" id="move_top" className={classes.root}>
      <Grid className={classes.topContainer}>
        <Grid className={classes.headingContainer}>
          <Typography className={classes.heading}>Order History</Typography>
          <Typography className={classes.count}>
            {INVOICES && INVOICES.length} Orders
          </Typography>
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
                    Status
                  </TableCell>
                  <TableCell
                    className={classes.tableHeadRow}
                    style={{ width: '21%' }}
                  >
                    Order ID
                  </TableCell>
                  <TableCell
                    className={clsx(classes.tableHeadRow, classes.textSec)}
                    style={{ width: '21%' }}
                  >
                    order Quantity
                  </TableCell>
                  <TableCell
                    className={clsx(classes.tableHeadRow, classes.textSec)}
                    style={{ width: '21%' }}
                  >
                    Amount
                  </TableCell>
                  <TableCell
                    className={clsx(classes.tableHeadRow, classes.textSec)}
                    style={{ width: '21%', paddingRight: 0 }}
                  >
                    Date
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {INVOICES &&
                  INVOICES.length > 0 &&
                  INVOICES.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell className={classes.tableBodyRow}>
                        <Link
                          to={`${PATH_ACCOUNT_SHORT.recipientDetails}${row.orderNo}`}
                          className={classes.link}
                        >
                          {
                            {
                              1: (
                                <Box className={classes.pending}>Pending </Box>
                              ),
                              2: (
                                <Box className={classes.completed}>
                                  Completed
                                </Box>
                              ),
                              3: (
                                <Box className={classes.cancelled}>
                                  Cancelled
                                </Box>
                              )
                            }[row.status]
                          }
                        </Link>
                      </TableCell>
                      <TableCell className={classes.tableBodyRow}>
                        {row.orderNo}
                      </TableCell>
                      <TableCell
                        className={clsx(classes.tableBodyRow, classes.textSec)}
                      >
                        {row.qty}
                      </TableCell>
                      <TableCell
                        className={clsx(classes.tableBodyRow, classes.textSec)}
                      >
                        {row.amount}
                      </TableCell>
                      <TableCell
                        className={clsx(classes.tableBodyRow, classes.textSec)}
                        style={{ paddingRight: 0 }}
                      >
                        {row.date}
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
    </Page>
  );
}
export default MyOrders;

import React from 'react';
import Page from 'src/components/Page';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import faker from 'faker';
import MyVouchersTop from './MyVouchersTop';
import MyVoucherItems from './MyVoucherItems';
import PaginationList from 'src/components/PaginationList';

// ----------------------------------------------------------------------
const ItemsList = [
  {
    id: faker.random.uuid(),
    date: 'Expiring 02.04.2021',
    name: 'Youtoopia Bueaty',
    amount: '15,000'
  },
  {
    id: faker.random.uuid(),
    date: 'Expiring 02.04.2021',
    name: 'Youtoopia Bueaty',
    amount: '15,000'
  },
  {
    id: faker.random.uuid(),
    date: 'Expiring 02.04.2021',
    name: 'Youtoopia Bueaty',
    amount: '15,000'
  },
  {
    id: faker.random.uuid(),
    date: 'Expiring 02.04.2021',
    name: 'Youtoopia Bueaty',
    amount: '15,000'
  },
  {
    id: faker.random.uuid(),
    date: 'Expiring 02.04.2021',
    name: 'Youtoopia Bueaty',
    amount: '15,000'
  },
  {
    id: faker.random.uuid(),
    date: 'Expiring 02.04.2021',
    name: 'Youtoopia Bueaty',
    amount: '15,000'
  },
  {
    id: faker.random.uuid(),
    date: 'Expiring 02.04.2021',
    name: 'Youtoopia Bueaty',
    amount: '15,000'
  },
  {
    id: faker.random.uuid(),
    date: 'Expiring 02.04.2021',
    name: 'Youtoopia Bueaty',
    amount: '15,000'
  },
  {
    id: faker.random.uuid(),
    date: 'Expiring 02.04.2021',
    name: 'Youtoopia Bueaty',
    amount: '15,000'
  },
  {
    id: faker.random.uuid(),
    date: 'Expiring 02.04.2021',
    name: 'Youtoopia Bueaty',
    amount: '15,000'
  },
  {
    id: faker.random.uuid(),
    date: 'Expiring 02.04.2021',
    name: 'Youtoopia Bueaty',
    amount: '15,000'
  },
  {
    id: faker.random.uuid(),
    date: 'Expiring 02.04.2021',
    name: 'Youtoopia Bueaty',
    amount: '15,000'
  }
];

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {},
  topContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0px 0px 0px 0px',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 0px 0px 0px'
    }
  },
  voucherList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 30,
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  paginationSec: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

function MyVouchers() {
  const classes = useStyles();
  return (
    <Page title="Suregifts business" id="move_top" className={classes.root}>
      <Grid className={classes.topContainer}>
        <MyVouchersTop />
        <Grid className={classes.voucherList}>
          {ItemsList &&
            ItemsList.length > 0 &&
            ItemsList.map((item, index) => (
              <MyVoucherItems item={item} key={index} />
            ))}
        </Grid>
        <Grid className={classes.paginationSec}>
          <PaginationList />
        </Grid>
      </Grid>
    </Page>
  );
}
export default MyVouchers;

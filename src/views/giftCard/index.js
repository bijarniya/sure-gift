import React, { useState } from 'react';
import faker from 'faker';
import { Grid, Container } from '@material-ui/core';
import Page from 'src/components/Page';
import { makeStyles } from '@material-ui/core/styles';
import Footer from 'src/components/Common/Footer';
import GiftCardItem from './GiftCardItem';
import GiftCardHeader from './GiftCardHeader';
import GiftSearchCard from './GiftSearchCard';
import { useSelector } from 'react-redux';

// ----------------------------------------------------------------------
const Items = [
  {
    id: faker.random.uuid(),
    name: 'Fast Food Paradise',
    Icon: 'card'
  },
  {
    id: faker.random.uuid(),
    name: 'Fast Food Paradise',
    Icon: 'card'
  },
  {
    id: faker.random.uuid(),
    name: 'Fast Food Paradise',
    Icon: 'card'
  },
  {
    id: faker.random.uuid(),
    name: 'Fast Food Paradise',
    Icon: 'card'
  },
  {
    id: faker.random.uuid(),
    name: 'Fast Food Paradise',
    Icon: 'card'
  },
  {
    id: faker.random.uuid(),
    name: 'Fast Food Paradise',
    Icon: 'card'
  },
  {
    id: faker.random.uuid(),
    name: 'Fast Food Paradise',
    Icon: 'card'
  },
  {
    id: faker.random.uuid(),
    name: 'Fast Food Paradise',
    Icon: 'card'
  },
  {
    id: faker.random.uuid(),
    name: 'Fast Food Paradise',
    Icon: 'card'
  },
  {
    id: faker.random.uuid(),
    name: 'Fast Food Paradise',
    Icon: 'card'
  },
  {
    id: faker.random.uuid(),
    name: 'Fast Food Paradise',
    Icon: 'card'
  },
  {
    id: faker.random.uuid(),
    name: 'Fast Food Paradise',
    Icon: 'card'
  }
];

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    backgroundColor: theme.palette.background.main
  },
  content: {
    backgroundColor: theme.palette.background.main,
    padding: '115px 0px 100px 0px',
    [theme.breakpoints.down('md')]: {
      padding: '65px 0px 100px 0px'
    }
  },
  leftBox: {
    flexBasis: '61.5%',
    flexGrow: '0',
    maxWidth: '61.5%',
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
      flexGrow: '0',
      flexBasis: '100%'
    }
  },
  rightBox: {
    maxWidth: '38.5%',
    flexGrow: '0',
    flexBasis: '38.5%',
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
      flexGrow: '0',
      flexBasis: '100%',
      marginLeft: '24px'
    }
  },
  product: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 100,
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  }
}));

function GiftCard() {
  const classes = useStyles();
  const { categories } = useSelector((state) => state.orders);
  const [category, setCategory] = useState({ name: 'Category', id: '' });
  const [list, setList] = useState(Items);

  const categoryFilter = (v) => {
    setCategory(v);
    setList(Items);
  };

  return (
    <Page title="Gift Card" id="move_top" className={classes.root}>
      <div className={classes.content}>
        <GiftCardHeader />
        <Container maxWidth="lg">
          <GiftSearchCard
            categoryFilter={categoryFilter}
            categories={categories}
            category={category}
          />
          <Grid item xs={12} className={classes.product}>
            {list &&
              list.length > 0 &&
              list.map((item, index) => (
                <GiftCardItem key={index} name={item.name} Icon={item.Icon} />
              ))}
          </Grid>
          <Footer />
        </Container>
      </div>
    </Page>
  );
}

export default GiftCard;

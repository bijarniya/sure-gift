import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import faker from 'faker';
import ParWithItem from './ParWithItem';

// ----------------------------------------------------------------------
const list = [
  {
    id: faker.random.uuid(),
    name: 'H&M',
    location: '3 location',
    address: 'Lagos, Behind Nicon Town, Total Filling Station, Ikate Elegushi',
    email: 'feedback@sparnigeria.com',
    status: 1
  },
  {
    id: faker.random.uuid(),
    name: 'H&M',
    location: '3 location',
    address: 'Lagos, Behind Nicon Town, Total Filling Station, Ikate Elegushi',
    email: 'feedback@sparnigeria.com',
    status: 0
  },
  {
    id: faker.random.uuid(),
    name: 'H&M',
    location: '3 location',
    address: 'Lagos, Behind Nicon Town, Total Filling Station, Ikate Elegushi',
    email: 'feedback@sparnigeria.com',
    status: 0
  },
  {
    id: faker.random.uuid(),
    name: 'H&M',
    location: '3 location',
    address: 'Lagos, Behind Nicon Town, Total Filling Station, Ikate Elegushi',
    email: 'feedback@sparnigeria.com',
    status: 1
  },
  {
    id: faker.random.uuid(),
    name: 'H&M',
    location: '3 location',
    address: 'Lagos, Behind Nicon Town, Total Filling Station, Ikate Elegushi',
    email: 'feedback@sparnigeria.com',
    status: 0
  },
  {
    id: faker.random.uuid(),
    name: 'H&M',
    location: '3 location',
    address: 'Lagos, Behind Nicon Town, Total Filling Station, Ikate Elegushi',
    email: 'feedback@sparnigeria.com',
    status: 0
  },
  {
    id: faker.random.uuid(),
    name: 'H&M',
    location: '3 location',
    address: 'Lagos, Behind Nicon Town, Total Filling Station, Ikate Elegushi',
    email: 'feedback@sparnigeria.com',
    status: 0
  },
  {
    id: faker.random.uuid(),
    name: 'H&M',
    location: '3 location',
    address: 'Lagos, Behind Nicon Town, Total Filling Station, Ikate Elegushi',
    email: 'feedback@sparnigeria.com',
    status: 0
  },
  {
    id: faker.random.uuid(),
    name: 'H&M',
    location: '3 location',
    address: 'Lagos, Behind Nicon Town, Total Filling Station, Ikate Elegushi',
    email: 'feedback@sparnigeria.com',
    status: 0
  },
  {
    id: faker.random.uuid(),
    name: 'H&M',
    location: '3 location',
    address: 'Lagos, Behind Nicon Town, Total Filling Station, Ikate Elegushi',
    email: 'feedback@sparnigeria.com',
    status: 0
  },
  {
    id: faker.random.uuid(),
    name: 'H&M',
    location: '3 location',
    address: 'Lagos, Behind Nicon Town, Total Filling Station, Ikate Elegushi',
    email: 'feedback@sparnigeria.com',
    status: 0
  },
  {
    id: faker.random.uuid(),
    name: 'H&M',
    location: '3 location',
    address: 'Lagos, Behind Nicon Town, Total Filling Station, Ikate Elegushi',
    email: 'feedback@sparnigeria.com',
    status: 0
  }
];

// ----------------------------------------------
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 60,
    width: '76%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      padding: 'auto'
    }
  },
  merchCard: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      marginTop: 30
    }
  }
}));

// ------------------------------------------------
const ParWithList = () => {
  const classes = useStyles();

  return (
    <Grid item xs={10} lg={10} className={classes.container}>
      <Grid item xs={12} className={classes.merchCard}>
        {list &&
          list.length > 0 &&
          list.map((item, index) => <ParWithItem key={index} item={item} />)}
      </Grid>
    </Grid>
  );
};

export default ParWithList;

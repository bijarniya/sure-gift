import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import GiftCategory from './filters/GiftCategory';
import StateFilters from './filters/StateFilters';
import OccasionFilters from './filters/OccasionFilters';
import SortByFilter from './filters/SortByFilter';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '24%',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto'
    }
  }
}));
// ----------------------------------------------------------------------

MerchantFilters.propTypes = {
  className: PropTypes.string
};

function MerchantFilters() {
  const classes = useStyles();

  return (
    <Grid className={classes.container}>
      <SortByFilter />
      <StateFilters />
      <GiftCategory />
      <OccasionFilters />
    </Grid>
  );
}

export default MerchantFilters;

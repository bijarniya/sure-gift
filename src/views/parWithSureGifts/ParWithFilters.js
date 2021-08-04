import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import SearchFilters from './filters/SearchFilters';
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

ParWithFilters.propTypes = {
  className: PropTypes.string
};

function ParWithFilters() {
  const classes = useStyles();

  return (
    <Grid className={classes.container}>
      <SearchFilters />
      <SortByFilter />
    </Grid>
  );
}

export default ParWithFilters;

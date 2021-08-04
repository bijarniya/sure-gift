import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CompanyBrand from './CompanyBrand';
import RewardEmployees from './RewardEmployees';
import ProductService from './ProductService';
// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {}
}));

// ----------------------------------------------------------------------

Infomation.propTypes = {
  className: PropTypes.string
};

function Infomation({ className }) {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <CompanyBrand />
      <ProductService />
      <RewardEmployees />
    </Grid>
  );
}
export default Infomation;

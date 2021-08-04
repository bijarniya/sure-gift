import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Country from './Country';
import Language from 'src/components/Common/Language';

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  }
}));

// ----------------------------------------------------------------------

EnAndCountry.propTypes = {
  className: PropTypes.string
};

function EnAndCountry() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Language />
      <Country />
    </Box>
  );
}

export default EnAndCountry;

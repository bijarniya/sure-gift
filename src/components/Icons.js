import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import IconsConfig from '../layouts/Common/Icons/IconsConfig';

// ----------------------------------------------------------------------

Icons.propTypes = {
  className: PropTypes.string
};

function Icons({ className, url, ...other }) {
  return (
    <Box
      component="img"
      alt=""
      src={IconsConfig[`${url}`]}
      className={className}
      {...other}
    />
  );
}

export default Icons;

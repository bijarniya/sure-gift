import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

// ----------------------------------------------------------------------

LogoWithName.propTypes = {
  dashboard: PropTypes.bool,
  className: PropTypes.string
};

function LogoWithName({ className, dashboard, ...other }) {
  return (
    <Box
      component="img"
      alt="logo"
      src={
        dashboard
          ? '/static/brand/logo_white.svg'
          : '/static/brand/logo_black.svg'
      }
      height={40}
      className={className}
      {...other}
    />
  );
}

export default LogoWithName;

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Pagination } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  paginationOuter: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 35,
    '& .MuiPaginationItem-root': {
      minWidth: 40,
      height: 40,
      borderRadius: 40,
      [theme.breakpoints.down('md')]: {
        minWidth: 20,
        height: 20
      }
    },
    '& .MuiPaginationItem-icon': {
      backgroundColor: 'rgba(145, 158, 171, 0.16)',
      borderRadius: 40,
      minWidth: 40,
      height: 40,
      padding: 5,
      [theme.breakpoints.down('md')]: {
        minWidth: 20,
        height: 20
      }
    }
  }
}));

// ----------------------------------------------------------------------

PaginationList.propTypes = {
  className: PropTypes.string
};

function PaginationList({ limit, count, handleChange }) {
  const classes = useStyles();
  let page = count && Math.ceil(count / limit);

  return (
    <Box className={classes.paginationOuter}>
      <Pagination count={page} defaultPage={1} onChange={handleChange} />
    </Box>
  );
}

export default PaginationList;

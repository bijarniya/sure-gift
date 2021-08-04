import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Icons from 'src/components/Icons';
// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  longDownArrow: {
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
    marginTop: 50
  },
  icon: {
    cursor: 'pointer'
  }
}));
// ----------------------------------------------------------------------

DownArrow.propTypes = {
  className: PropTypes.string
};

function DownArrow({ icon }) {
  const classes = useStyles();

  const handleScroll = () =>
    document.getElementById('giftCards').scrollIntoView({ behavior: 'smooth' });

  return (
    <Grid item xs={12} lg={12} className={classes.longDownArrow}>
      <Icons url={icon} onClick={handleScroll} className={classes.icon} />
    </Grid>
  );
}

export default DownArrow;

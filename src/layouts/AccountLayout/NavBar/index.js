import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ProfileNavBar from './ProfileNavBar';
import NavBarList from './NavBarList';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {}
}));

// -------------------------------------------------
NavBar.propTypes = {
  children: PropTypes.node
};

function NavBar({ children }) {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <ProfileNavBar />
      <NavBarList />
    </Grid>
  );
}

export default NavBar;

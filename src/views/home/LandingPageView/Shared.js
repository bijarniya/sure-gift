import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { Link as ScrollLink } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Container, Typography } from '@material-ui/core';
import Icons from 'src/components/Icons';
// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    background: theme.palette.background.main,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  logoImage: {
    maxWidth: '100%',
    height: 'auto'
  },
}));

// ----------------------------------------------------------------------

sharedBack.propTypes = {
  className: PropTypes.string
};

function sharedBack({ className }) {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={clsx(classes.root, className)}>
     
    </Container>
  );
}

export default sharedBack;

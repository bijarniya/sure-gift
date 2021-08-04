import React from 'react';
import TopBar from 'src/components/Common/TopBar';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    background: theme.palette.background.main
  },
  content: {
    height: '100%',
    background: theme.palette.background.main
  }
}));

// ----------------------------------------------------------------------

HomeLayout.propTypes = {
  children: PropTypes.node
};

function HomeLayout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopBar />
      <div className={classes.content}>{children}</div>
    </div>
  );
}

export default HomeLayout;

import React from 'react';
import TopBar from 'src/components/Common/TopBar';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ImagesConfig from 'src/layouts/Common/Images';
// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    backgroundImage: `url(${ImagesConfig.background01})`
  },
  content: {
    height: '100%'
  }
}));

// ----------------------------------------------------------------------

CustomizeGiftCardLayout.propTypes = {
  children: PropTypes.node
};

function CustomizeGiftCardLayout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopBar status={true} />
      <div className={classes.content}>{children}</div>
    </div>
  );
}

export default CustomizeGiftCardLayout;

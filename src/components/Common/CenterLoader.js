import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  centerLoaderCover: {
    margin: 0,
    padding: 0,
    position: 'fixed',
    right: 0,
    top: 0,
    width: '100%',
    zIndex: 9999,
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  centerLoader: {
    border: '5px solid #f3f3f3',
    borderRadius: '50%',
    borderTop: '5px solid #ed8e34',
    width: 50,
    zIndex: 9999,
    height: 50,
    animation: 'spin 2s linear infinite',
    top: '45%',
    position: 'absolute',
    left: '50%',
    '-webkit-animation': 'spin 2s linear infinite'
  }
}));

const CenterLoader = () => {
  const classes = useStyles();

  return (
    <div className={classes.centerLoaderCover}>
      <div className={classes.centerLoader} />
    </div>
  );
};

export default CenterLoader;

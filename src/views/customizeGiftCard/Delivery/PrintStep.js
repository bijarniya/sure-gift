import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box } from '@material-ui/core';
import ImagesConfig from 'src/layouts/Common/Images';
// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    marginTop: 40,
    marginBottom: 30
  },
  imgSec: {
    width: '100%',
    height: '100%'
  }
}));

function PrintStep() {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.root}>
      <Box
        component="img"
        alt="icon"
        src={ImagesConfig.printHome}
        className={classes.imgSec}
      />
    </Grid>
  );
}
export default PrintStep;

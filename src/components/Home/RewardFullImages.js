import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Icons from 'src/components/Icons';
import { Grid } from '@material-ui/core';
// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    display: 'flex',
    paddingTop: 88,
    width: '100%',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  iconImages: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 10px'
    }
  }
}));

// ----------------------------------------------------------------------

RewardFullImages.propTypes = {
  className: PropTypes.string
};

function RewardFullImages() {
  const classes = useStyles();

  return (
    <Grid item xl={12} sm={12} className={classes.imageContainer}>
      <Icons url={'girl1'} className={classes.iconImages} />
      <Icons url={'boy1'} className={classes.iconImages} />
      <Icons url={'girl2'} className={classes.iconImages} />
      <Icons url={'girl3'} className={classes.iconImages} />
    </Grid>
  );
}
export default RewardFullImages;

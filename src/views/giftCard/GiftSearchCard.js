import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import DropDown from 'src/components/Common/DropDown';
import GiftSearchBar from './GiftSearchBar';
import Country from 'src/components/Common/Country';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 18,
    width: '82%',
    background: theme.palette.background.secondary,
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    }
  },
  leftBox: {
    width: '25%',
    padding: '25px 20px 25px 25px',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  middleBox: {
    width: '25%',
    padding: '25px 20px 25px 0px',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  rightBox: {
    padding: '25px 20px 25px 0px',
    width: '50%',
    [theme.breakpoints.down('md')]: {
      padding: '0px 20px 25px 25px',
      width: '100%'
    }
  },
  outerClass: {
    background: theme.palette.background.main,
    height: 60,
    [theme.breakpoints.down('md')]: {
      height: 60
    }
  }
}));

const GiftSearchCard = ({ categories, categoryFilter, category }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Box className={classes.container}>
        <Box className={classes.leftBox}>
          <Country outerClass={classes.outerClass} status={true} />
        </Box>
        <Box className={classes.middleBox}>
          <DropDown
            options={categories}
            category={category}
            handleDropDown={categoryFilter}
          />
        </Box>
        <Box className={classes.rightBox}>
          <GiftSearchBar />
        </Box>
      </Box>
    </Grid>
  );
};
export default GiftSearchCard;

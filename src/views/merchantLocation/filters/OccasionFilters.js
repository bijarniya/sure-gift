import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import OptionsDropDown from 'src/components/Common/OptionsDropDown';

// ----------------------------------------------------------------------
const options = [
  {
    id: 1,
    label: 'All '
  }
];

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: 50
  },
  heading: {
    color: theme.palette.text.gray,
    fontFamily: theme.palette.font.secondaryFontFamily,
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 400
  },
  containerInner: {
    marginTop: 20
  },
  dropDownContainer: {
    display: 'flex',
    alignItems: 'center',
    background: theme.palette.background.main,
    borderRadius: 18
  },
  dropDownOuter: {
    display: 'flex',
    alignItems: 'center',
    height: 60,
    width: '100%',
    padding: '0px 25px 0px 25px',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  catInfo: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    width: '91%'
  },
  downArrowSec: {
    width: 15,
    height: 10
  },
  titleSection: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 16,
    fontWeight: 400,
    fontStyle: 'normal'
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    margin: '0px -12px 0px -12px'
  },
  categoriesBox: {
    marginLeft: 20,
    width: '75%'
  },
  dropDownContainerInner: {
    width: '100%'
  },
  checkBoxSec: {},
  menuItemRow: {
    width: '108%',
    margin: '2px 0px 0px -12px',
    padding: '15px 15px !important',
    '&:hover': {
      background: theme.palette.background.secondary,
      borderRadius: 10,
      width: '108%'
    }
  },
  menuLabel: {
    width: '100%',
    fontSize: 16,
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontStyle: 'normal',
    fontWeight: 400
  },
  isActive: {
    background: theme.palette.background.secondary,
    borderRadius: 10,
    padding: '15px !important',
    width: '108%'
  },
  outerClass: {
    display: 'flex',
    alignItems: 'center',
    background: theme.palette.background.secondary,
    borderRadius: 18,
    height: 60,
    cursor: 'pointer'
  },
  iconClass: {
    width: 24,
    height: 24
  }
}));
// ----------------------------------------------------------------------

OccasionFilters.propTypes = {
  className: PropTypes.string
};

function OccasionFilters() {
  const classes = useStyles();
  const [optionDefault, setOptionDefault] = useState(options[0]);

  const handleOptionOnChange = (value) => {
    setOptionDefault(value);
  };

  return (
    <Grid className={classes.container}>
      <Typography className={classes.heading}>Occasion</Typography>
      <Grid item xs={12} className={classes.containerInner}>
        <OptionsDropDown
          options={options}
          optionDefault={optionDefault}
          handleOptionOnChange={handleOptionOnChange}
          outerClass={classes.outerClass}
          upIcon={'upArrowN'}
          downIcon={'downArrow'}
          iconClass={classes.iconClass}
        />
      </Grid>
    </Grid>
  );
}

export default OccasionFilters;

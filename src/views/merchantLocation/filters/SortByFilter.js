import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Box } from '@material-ui/core';
import Icons from 'src/components/Icons';

// ----------------------------------------------------------------------
const options = [
  {
    id: 1,
    label: 'Low Price '
  },
  {
    id: 2,
    label: 'High Price '
  },
  {
    id: 3,
    label: 'New'
  }
];

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  heading: {
    color: theme.palette.text.gray,
    fontFamily: theme.palette.font.secondaryFontFamily,
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 400
  },
  containerInner: {
    marginTop: 15,
    cursor: 'pointer'
  },
  itemBox: {
    width: '100%',
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    cursor: 'pointer'
  },
  labelSec: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 16,
    fontWeight: 400,
    width: '93%'
  },
  labelActive: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 16,
    fontWeight: 400,
    width: '93%'
  }
}));
// ----------------------------------------------------------------------

StateFilters.propTypes = {
  className: PropTypes.string
};

function StateFilters() {
  const classes = useStyles();
  const [active, setActive] = useState(options[0].id);

  const handleShortBy = (id) => {
    active === id ? setActive('') : setActive(id);
  };

  return (
    <Grid className={classes.container}>
      <Typography className={classes.heading}>Sort by</Typography>
      <Grid item xs={12} className={classes.containerInner}>
        {options &&
          options.length > 0 &&
          options.map((item, index) => {
            return (
              <Box
                className={classes.itemBox}
                onClick={() => handleShortBy(item.id)}
                key={index}
              >
                <Typography
                  className={
                    active === item.id ? classes.labelActive : classes.labelSec
                  }
                >
                  {item && item.label}
                </Typography>
                {active === item.id && <Icons url={'checkMark'} />}
              </Box>
            );
          })}
      </Grid>
    </Grid>
  );
}

export default StateFilters;

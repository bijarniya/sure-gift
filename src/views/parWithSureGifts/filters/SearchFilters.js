import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, TextField } from '@material-ui/core';

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
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    background: theme.palette.background.secondary,
    borderRadius: 18,
    height: 70
  },
  textField: {
    background: theme.palette.background.secondary,
    borderRadius: 18
  },
  input: {
    border: '0px solid rgba(255, 255, 255, 0.3)',
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontWeight: 400,
    fontSize: 16,
    height: 70,
    '&::placeholder': {
      color: `${theme.palette.text.primary} !important`
    }
  },
  notchedOutline: { border: 'none', borderRadius: 18 }
}));
// ----------------------------------------------------------------------

SearchFilters.propTypes = {
  className: PropTypes.string
};

function SearchFilters() {
  const classes = useStyles();

  return (
    <Grid className={classes.container}>
      <Typography className={classes.heading}>Search</Typography>
      <Grid item xs={12} className={classes.containerInner}>
        <TextField
          name="search"
          fullWidth
          type="text"
          placeholder="Search here... e.g utility"
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
          InputProps={{
            className: classes.input,
            classes: {
              notchedOutline: classes.input,
              input: classes.input
            }
          }}
        />
      </Grid>
    </Grid>
  );
}

export default SearchFilters;

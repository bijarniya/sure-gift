import React, { useState } from 'react';
import {
  makeStyles,
  Grid,
  TextField,
  Box,
  Typography
} from '@material-ui/core';
import { Formik } from 'formik';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 40,
    marginBottom: 100
  },
  heading: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 700,
    fontSize: 20
  },
  topMargin: {
    marginTop: 30
  },
  label: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontWeight: 700,
    fontSize: 14,
    display: 'block',
    marginBottom: 10
  },
  textField: {
    width: '100%',
    borderRadius: 12,
    margin: 1
  },
  input: {
    background: theme.palette.background.main,
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 16,
    borderRadius: 12,
    width: '99.5%',
    color: theme.palette.text.primary,
    '&::placeholder': {
      color: theme.palette.text.primary
    }
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      border: 'none !important'
    }
  },
  cssFocused: {},
  notchedOutline: {
    border: 'none !important'
  },
  textFocus: {
    background: 'rgba(255, 255, 255, 0.3)',
    border: 1,
    borderRadius: 12
  },
  textFocusActive: {
    background: `conic-gradient(${theme.palette.background.conic})`,
    border: 1,
    borderRadius: 12
  },
  boxOuter: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column'
    }
  },
  leftBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    paddingRight: 10,
    [theme.breakpoints.down('md')]: {
      paddingRight: 0,
      width: '100%'
    }
  },
  rightBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    paddingLeft: 10,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
      width: '100%',
      marginTop: 20
    }
  },
  boxAddress: {
    width: '100%'
  }
}));

// ----------------------------------------------------------------------
const HomeStep = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    name: false,
    phone: false,
    address: false,
    state: false,
    city: false
  });

  const handleOnFocus = (event) => {
    setState({ ...state, [event.target.name]: true });
  };

  const handleOnFocusOut = (event) => {
    setState({ ...state, [event.target.name]: false });
  };

  return (
    <Grid className={classes.root}>
      <Typography className={classes.heading}>Recipient Infromation</Typography>
      <Formik
        initialValues={{
          name: '',
          phone: '',
          address: '',
          state: '',
          city: ''
        }}
        validate={(values) => {
          const errors = {};
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit}>
            <Box className={classes.topMargin} />
            <Box className={classes.boxOuter}>
              <Box className={classes.leftBox}>
                <label className={classes.label}>Full Name</label>
                <Box
                  className={
                    state && state.name
                      ? classes.textFocusActive
                      : classes.textFocus
                  }
                >
                  <TextField
                    onFocus={handleOnFocus}
                    onBlur={handleOnFocusOut}
                    fullWidth
                    value={values.name}
                    onChange={handleChange}
                    type="text"
                    name="name"
                    placeholder=""
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true
                    }}
                    InputProps={{
                      className: classes.input,
                      classes: {
                        root: classes.cssOutlinedInput,
                        focused: classes.cssFocused,
                        notchedOutline: classes.notchedOutline
                      }
                    }}
                  />
                </Box>
              </Box>
              <Box className={classes.rightBox}>
                <label className={classes.label}>Phone Number</label>
                <Box
                  className={
                    state && state.phone
                      ? classes.textFocusActive
                      : classes.textFocus
                  }
                >
                  <TextField
                    onFocus={handleOnFocus}
                    onBlur={handleOnFocusOut}
                    fullWidth
                    type="text"
                    name="phone"
                    placeholder=""
                    onChange={handleChange}
                    value={values.phone}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true
                    }}
                    InputProps={{
                      className: classes.input,
                      classes: {
                        root: classes.cssOutlinedInput,
                        focused: classes.cssFocused,
                        notchedOutline: classes.notchedOutline
                      }
                    }}
                  />
                </Box>
              </Box>
            </Box>
            <Box className={classes.topMargin} />
            <Box className={classes.boxOuter}>
              <Box className={classes.boxAddress}>
                <label className={classes.label}>Address</label>
                <Box
                  className={
                    state && state.address
                      ? classes.textFocusActive
                      : classes.textFocus
                  }
                >
                  <TextField
                    onFocus={handleOnFocus}
                    onBlur={handleOnFocusOut}
                    fullWidth
                    type="text"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                    placeholder=""
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true
                    }}
                    InputProps={{
                      className: classes.input,
                      classes: {
                        root: classes.cssOutlinedInput,
                        focused: classes.cssFocused,
                        notchedOutline: classes.notchedOutline
                      }
                    }}
                  />
                </Box>
              </Box>
            </Box>

            <Box className={classes.topMargin} />
            <Box className={classes.boxOuter}>
              <Box className={classes.leftBox}>
                <label className={classes.label}>State</label>
                <Box
                  className={
                    state && state.state
                      ? classes.textFocusActive
                      : classes.textFocus
                  }
                >
                  <TextField
                    onFocus={handleOnFocus}
                    onBlur={handleOnFocusOut}
                    fullWidth
                    type="text"
                    name="state"
                    value={values.state}
                    onChange={handleChange}
                    placeholder=""
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true
                    }}
                    InputProps={{
                      className: classes.input,
                      classes: {
                        root: classes.cssOutlinedInput,
                        focused: classes.cssFocused,
                        notchedOutline: classes.notchedOutline
                      }
                    }}
                  />
                </Box>
              </Box>
              <Box className={classes.rightBox}>
                <label className={classes.label}>City</label>
                <Box
                  className={
                    state && state.city
                      ? classes.textFocusActive
                      : classes.textFocus
                  }
                >
                  <TextField
                    onFocus={handleOnFocus}
                    onBlur={handleOnFocusOut}
                    fullWidth
                    type="text"
                    name="city"
                    value={values.city}
                    placeholder=""
                    onChange={handleChange}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true
                    }}
                    InputProps={{
                      className: classes.input,
                      classes: {
                        root: classes.cssOutlinedInput,
                        focused: classes.cssFocused,
                        notchedOutline: classes.notchedOutline
                      }
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </form>
        )}
      </Formik>
    </Grid>
  );
};

export default HomeStep;

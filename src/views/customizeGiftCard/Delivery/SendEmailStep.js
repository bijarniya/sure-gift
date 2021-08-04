import React, { useState } from 'react';
import {
  makeStyles,
  Grid,
  TextField,
  Box,
  Typography
} from '@material-ui/core';
import { Formik } from 'formik';

// ------------------------------------------------
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
  }
}));

// ----------------------------------------------------------------------
const SendEmailStep = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    fName: false,
    lName: false,
    email: false,
    phone: false
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
          fName: '',
          lName: '',
          email: '',
          phone: ''
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
                <label className={classes.label}> First name</label>
                <Box
                  className={
                    state && state.fName
                      ? classes.textFocusActive
                      : classes.textFocus
                  }
                >
                  <TextField
                    onFocus={handleOnFocus}
                    onBlur={handleOnFocusOut}
                    fullWidth
                    value={values.fName}
                    onChange={handleChange}
                    type="text"
                    name="fName"
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
                <label className={classes.label}> Last Name</label>
                <Box
                  className={
                    state && state.lName
                      ? classes.textFocusActive
                      : classes.textFocus
                  }
                >
                  <TextField
                    onFocus={handleOnFocus}
                    onBlur={handleOnFocusOut}
                    fullWidth
                    type="text"
                    name="lName"
                    value={values.lName}
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
            <Box className={classes.topMargin} />
            <Box className={classes.boxOuter}>
              <Box className={classes.leftBox}>
                <label className={classes.label}> Email Address</label>
                <Box
                  className={
                    state && state.email
                      ? classes.textFocusActive
                      : classes.textFocus
                  }
                >
                  <TextField
                    onFocus={handleOnFocus}
                    onBlur={handleOnFocusOut}
                    fullWidth
                    type="email"
                    name="email"
                    value={values.email}
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
                <label className={classes.label}> Phone Number</label>
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
                    value={values.phone}
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

export default SendEmailStep;

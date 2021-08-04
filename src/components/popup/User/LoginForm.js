import PropTypes from 'prop-types';
import React from 'react';
import { Form, FormikProvider } from 'formik';
import { passwordError, emailError } from 'src/utils/helpError';
import { Box, TextField, Grid, Typography } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 20
  },
  signInButton: {
    backgroundColor: theme.palette.button.primary,
    color: theme.palette.text.dark,
    fontSize: 14,
    fontWeight: 400,
    borderRadius: 18,
    height: 50,
    '&:hover': {
      backgroundColor: theme.palette.button.primary,
      color: theme.palette.text.dark
    }
  },
  labelText: {
    fontFamily: theme.palette.font.fontFamily,
    color: theme.palette.text.primary,
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 10,
    display: 'block'
  },
  textField: {
    width: '100%',
    background: theme.palette.background.paper
  },
  input: {
    border: '1px solid rgba(255, 255, 255, 0.3)',
    fontFamily: theme.palette.font.fontFamily,
    color: theme.palette.text.gray,
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 16,
    borderRadius: 12,
    height: 50,
    '&:focused': {
      border: '1px solid rgba(255, 255, 255, 0.3)'
    },
    '&::placeholder': {
      color: theme.palette.text.gray
    }
  },
  forgotSec: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 14,
    fontWeight: 400,
    textAlign: 'right',
    color: '#92FBB3',
    width: '100%',
    cursor: 'pointer',
    marginTop: 10
  },
  helperText: {
    marginTop: 0
  }
}));

// ----------------------------------------------------------------------

LoginForm.propTypes = {
  formik: PropTypes.object.isRequired
};

function LoginForm({ formik }) {
  const classes = useStyles();
  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <Grid className={classes.container}>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <label className={classes.labelText}>Email</label>
          <TextField
            fullWidth
            autoComplete="off"
            type="text"
            placeholder="Enter Email"
            className={classes.textField}
            {...getFieldProps('email')}
            InputLabelProps={{
              shrink: true
            }}
            InputProps={{
              className: classes.input
            }}
            FormHelperTextProps={{ classes: { root: classes.helperText } }}
            error={
              Boolean(touched.email && errors.email) ||
              emailError(errors.afterSubmit).error
            }
            helperText={
              (touched.email && errors.email) ||
              emailError(errors.afterSubmit).helperText
            }
          />
          <Box sx={{ mb: 2 }} />
          <label className={classes.labelText}>Password</label>
          <TextField
            fullWidth
            autoComplete="off"
            type="password"
            placeholder="Enter Password"
            className={classes.textField}
            {...getFieldProps('password')}
            InputLabelProps={{
              shrink: true
            }}
            InputProps={{
              className: classes.input,
              classes: { focused: classes.input }
            }}
            FormHelperTextProps={{ classes: { root: classes.helperText } }}
            error={
              Boolean(touched.password && errors.password) ||
              passwordError(errors.afterSubmit).error
            }
            helperText={
              (touched.password && errors.password) ||
              passwordError(errors.afterSubmit).helperText
            }
          />
          <Typography className={classes.forgotSec}>
            Forgot your password?
          </Typography>
          <Box sx={{ mb: 2 }} />
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            pending={isSubmitting.toString()}
            className={classes.signInButton}
          >
            Sign in
          </LoadingButton>
        </Form>
      </FormikProvider>
    </Grid>
  );
}

export default LoginForm;

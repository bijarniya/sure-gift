import PropTypes from 'prop-types';
import React from 'react';
import { Form, FormikProvider } from 'formik';
import { passwordError, emailError } from 'src/utils/helpError';
import {
  Box,
  TextField,
} from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  signInButton: {
    backgroundColor: theme.palette.button.primary,
    borderRadius: 18,
    fontSize: 14,
    color: theme.palette.text.dark,
    '&:hover': {
      backgroundColor: theme.palette.button.primary
    }
  },
  labelText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: theme.palette.text.primary,
    marginBottom: 8,
    display: 'block'
  },
  textField: {
    width: '100%',
    background: theme.palette.background.paper
  },
  input: {
    border: '1px solid rgba(255, 255, 255, 0.3)',
    fontFamily: theme.palette.font.fontFamily,
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 16,
    borderRadius: 12,
    color: theme.palette.text.gray,
    '&:focused': {
      border: '1px solid rgba(255, 255, 255, 0.3)',
    }
  }
}));

// ----------------------------------------------------------------------

LoginForm.propTypes = {
  formik: PropTypes.object.isRequired
};

function LoginForm({ formik }) {
  const classes = useStyles();
  const {
    errors,
    touched,
    isSubmitting,
    handleSubmit,
    getFieldProps
  } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <label className={classes.labelText}>User Name</label>
        <TextField
          fullWidth
          type="text"
          placeholder="Enter User Name"
          className={classes.textField}
          {...getFieldProps('email')}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            className: classes.input
          }}
          error={
            Boolean(touched.email && errors.email) ||
            emailError(errors.afterSubmit).error
          }
          helperText={
            (touched.email && errors.email) ||
            emailError(errors.afterSubmit).helperText
          }
        />
        <Box sx={{ mb: 3 }} />
        <label className={classes.labelText}>Password</label>
        <TextField
          fullWidth
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
          error={
            Boolean(touched.password && errors.password) ||
            passwordError(errors.afterSubmit).error
          }
          helperText={
            (touched.password && errors.password) ||
            passwordError(errors.afterSubmit).helperText
          }
        />
        <Box sx={{ mb: 3 }} />
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          pending={isSubmitting}
          className={classes.signInButton}
        >
          Sign in
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}

export default LoginForm;

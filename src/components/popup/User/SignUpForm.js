import PropTypes from 'prop-types';
import React from 'react';
import { Form, FormikProvider } from 'formik';
import { passwordError, emailError } from 'src/utils/helpError';
import { Box, TextField, Grid, Checkbox } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';

// --------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 20
  },
  signInButton: {
    backgroundColor: theme.palette.button.primary,
    fontSize: 14,
    fontWeight: 400,
    color: theme.palette.text.dark,
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
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 16,
    borderRadius: 12,
    height: 50,
    color: theme.palette.text.gray,
    '&:focused': {
      border: '1px solid rgba(255, 255, 255, 0.3)'
    },
    '&::placeholder': {
      color: theme.palette.text.gray
    }
  },
  helperText: {
    marginTop: 0
  },
  containerInner: {
    display: 'flex',
    flexDirection: 'row'
  },
  leftBox: {
    display: 'flex',
    flexDirection: 'column'
  },
  rightBox: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 20
  },
  emailOuter: {
    display: 'flex',
    flexDirection: 'column'
  },
  checkBox: {
    color: '#92FBB3 !important',
    '& .checked': {
      color: '#92FBB3 !important'
    }
  },
  checkBoxOuter: {
    display: 'flex',
    alignItems: 'center'
  },
  checkBoxLable: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 14,
    fontWeight: 400,
    cursor: 'pointer'
  },
  termCls: {
    color: '#FF4842',
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 500,
    marginLeft: 41,
    marginTop: '-5px',
    fontSize: '0.75rem'
  }
}));

// ----------------------------------------------------------------------

SignUpForm.propTypes = {
  formik: PropTypes.object.isRequired
};

function SignUpForm({ formik }) {
  const classes = useStyles();
  const {
    errors,
    touched,
    isSubmitting,
    handleSubmit,
    getFieldProps,
    values
  } = formik;

  return (
    <Grid className={classes.container}>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Grid className={classes.containerInner}>
            <Box className={classes.leftBox}>
              <label className={classes.labelText}>First Name</label>
              <TextField
                fullWidth
                type="text"
                placeholder="Enter First Name"
                className={classes.textField}
                {...getFieldProps('firstName')}
                InputLabelProps={{
                  shrink: true
                }}
                InputProps={{
                  className: classes.input
                }}
                FormHelperTextProps={{ classes: { root: classes.helperText } }}
                error={Boolean(touched.firstName && errors.firstName)}
                helperText={
                  touched.firstName && errors.firstName && errors.firstName
                }
              />
            </Box>
            <Box className={classes.rightBox}>
              <label className={classes.labelText}>Last Name</label>
              <TextField
                fullWidth
                type="text"
                placeholder="Enter Last Name"
                className={classes.textField}
                {...getFieldProps('lastName')}
                InputLabelProps={{
                  shrink: true
                }}
                InputProps={{
                  className: classes.input
                }}
                FormHelperTextProps={{ classes: { root: classes.helperText } }}
                error={Boolean(touched.lastName && errors.lastName)}
                helperText={
                  touched.lastName && errors.lastName && errors.lastName
                }
              />
            </Box>
          </Grid>
          <Box sx={{ mb: 2 }} />
          <Grid className={classes.emailOuter}>
            <label className={classes.labelText}>Email</label>
            <TextField
              fullWidth
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
          </Grid>
          <Box sx={{ mb: 2 }} />
          <Grid className={classes.containerInner}>
            <Box className={classes.leftBox}>
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
            </Box>
            <Box className={classes.rightBox}>
              <label className={classes.labelText}>Confirm Password</label>
              <TextField
                fullWidth
                type="password"
                placeholder="Enter Confirm Password"
                className={classes.textField}
                {...getFieldProps('confirmPassword')}
                InputLabelProps={{
                  shrink: true
                }}
                InputProps={{
                  className: classes.input
                }}
                FormHelperTextProps={{ classes: { root: classes.helperText } }}
                error={Boolean(
                  touched.confirmPassword && errors.confirmPassword
                )}
                helperText={
                  touched.confirmPassword &&
                  errors.confirmPassword &&
                  errors.confirmPassword
                }
              />
            </Box>
          </Grid>
          <Box sx={{ mb: 2 }} />
          <Grid className={classes.checkBoxOuter}>
            <Checkbox
              id="termsCondition"
              {...getFieldProps('termsCondition')}
              classes={{
                root: classes.checkBox,
                checked: classes.checkBox
              }}
              icon={<CircleUnchecked />}
              checkedIcon={<CircleCheckedFilled />}
            />
            <label className={classes.checkBoxLable} htmlFor="termsCondition">
              I accept the{' '}
              <span style={{ color: '#92FBB3' }}>terms & condition</span> and{' '}
              <span style={{ color: '#92FBB3' }}>privacy policy</span>
            </label>
          </Grid>
          {touched.termsCondition && errors.termsCondition && (
            <Grid className={classes.termCls}>{errors.termsCondition}</Grid>
          )}
          <Grid className={classes.checkBoxOuter}>
            <Checkbox
              id="receiveLetters"
              {...getFieldProps('receiveLetters')}
              checked={values.receiveLetters}
              classes={{
                root: classes.checkBox,
                checked: classes.checkBox
              }}
              icon={<CircleUnchecked />}
              checkedIcon={<CircleCheckedFilled />}
            />
            <label className={classes.checkBoxLable} htmlFor="receiveLetters">
              I want to receive SureGifts’s Newsletter
            </label>
          </Grid>
          <Box sx={{ mb: 2 }} />
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            pending={isSubmitting.toString()}
            className={classes.signInButton}
          >
            Sign up
          </LoadingButton>
        </Form>
      </FormikProvider>
    </Grid>
  );
}

export default SignUpForm;

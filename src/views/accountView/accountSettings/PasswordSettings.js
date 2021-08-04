import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography, TextField } from '@material-ui/core';
import { Formik } from 'formik';
import ButtonLoading from 'src/components/Common/ButtonLoading';
import * as Yup from 'yup';
import useAuth from 'src/hooks/useAuth';
import { apiMessage, validationMessage } from 'src/constants/message';
import { getSuccess, getError } from 'src/redux/slices/error';
import { useDispatch } from 'react-redux';

// --------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 80,
    [theme.breakpoints.down('sm')]: {}
  },
  heading: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontSize: 24,
    fontWeight: 700,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16
    }
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  leftBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    paddingRight: 10,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      paddingRight: 0
    }
  },
  rightBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    paddingLeft: 10,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      paddingLeft: 0,
      marginTop: 30
    }
  },
  fullContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 30
  },
  labelText: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 10,
    display: 'block'
  },
  textField: {
    width: '100%'
  },
  input: {
    color: theme.palette.text.gray,
    fontFamily: theme.palette.font.fontFamily,
    fontWeight: 600,
    fontSize: 16,
    borderRadius: 12,
    height: 52,
    '&::placeholder': {
      color: theme.palette.text.gray
    }
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      border: '1px solid rgba(255, 255, 255, 0.3) !important'
    }
  },
  cssFocused: {},
  notchedOutline: {
    border: '1px solid rgba(255, 255, 255, 0.3) !important'
  },
  buttonOuter: {
    background: theme.palette.text.primary,
    display: 'flex',
    flexDirection: 'row',
    width: 200,
    borderRadius: 18,
    marginTop: 40,
    padding: 0,
    [theme.breakpoints.down('md')]: {
      width: 200
    }
  },
  buttonInner: {
    background: theme.palette.text.primary,
    border: `0px solid ${theme.palette.text.primary}`,
    color: theme.palette.text.dark,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 14,
    boxShadow: 'none',
    borderRadius: 18,
    fontWeight: 400,
    margin: 0,
    padding: '0px 16.5px',
    '&:hover': {
      background: theme.palette.text.primary,
      boxShadow: 'none',
      borderRadius: 18
    },
    [theme.breakpoints.down('md')]: {
      padding: '0px 0px'
    }
  },
  buttonBox: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  helperText: {
    marginTop: 0
  }
}));

function PasswordSettings() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { resetPassword } = useAuth();

  const profileSchema = Yup.object().shape({
    currentPassword: Yup.string()
      .required(validationMessage.OldPasswordRequired)
      .min(8, validationMessage.passwordMin)
      .matches(
        '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$',
        validationMessage.passwordUppercaseAndLowercase
      ),
    newPassword: Yup.string()
      .required(validationMessage.newPasswordRequired)
      .min(8, validationMessage.passwordMin)
      .matches(
        '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$',
        validationMessage.passwordUppercaseAndLowercase
      ),
    confirmPssword: Yup.string()
      .required(validationMessage.confirmPassword)
      .when('newPassword', {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref('newPassword')],
          validationMessage.passwordAndConfirm
        )
      })
  });

  return (
    <Grid container>
      <Grid item xs={12} className={classes.root}>
        <Typography className={classes.heading}>Password Settings</Typography>
        <Formik
          initialValues={{
            currentPassword: '',
            newPassword: '',
            confirmPssword: ''
          }}
          validationSchema={profileSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            try {
              await resetPassword({
                currentPassword: values.currentPassword,
                newPassword: values.newPassword
              });
              dispatch(getSuccess(apiMessage.passwordUpdated));
              resetForm();
            } catch (error) {
              dispatch(getError(error));
            }
          }}
        >
          {({ errors, touched, isSubmitting, handleSubmit, getFieldProps }) => (
            <form onSubmit={handleSubmit}>
              <Grid className={classes.fullContainer}>
                <label
                  className={classes.labelText}
                  style={{ color: '#AAAABE' }}
                >
                  Current Password
                </label>
                <TextField
                  fullWidth
                  type="password"
                  {...getFieldProps('currentPassword')}
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
                  FormHelperTextProps={{
                    classes: { root: classes.helperText }
                  }}
                  error={Boolean(
                    touched.currentPassword && errors.currentPassword
                  )}
                  helperText={
                    touched.currentPassword &&
                    errors.currentPassword &&
                    errors.currentPassword
                  }
                />
              </Grid>
              <Grid className={classes.mainContainer}>
                <Box className={classes.leftBox}>
                  <label className={classes.labelText}>New Password</label>
                  <TextField
                    fullWidth
                    type="password"
                    {...getFieldProps('newPassword')}
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
                    FormHelperTextProps={{
                      classes: { root: classes.helperText }
                    }}
                    error={Boolean(touched.newPassword && errors.newPassword)}
                    helperText={
                      touched.newPassword &&
                      errors.newPassword &&
                      errors.newPassword
                    }
                  />
                </Box>
                <Box className={classes.rightBox}>
                  <label className={classes.labelText}>Confirm Pssword</label>
                  <TextField
                    fullWidth
                    type="password"
                    {...getFieldProps('confirmPssword')}
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
                    FormHelperTextProps={{
                      classes: { root: classes.helperText }
                    }}
                    error={Boolean(
                      touched.confirmPssword && errors.confirmPssword
                    )}
                    helperText={
                      touched.confirmPssword &&
                      errors.confirmPssword &&
                      errors.confirmPssword
                    }
                  />
                </Box>
              </Grid>

              <Box className={classes.buttonBox}>
                <ButtonLoading
                  title={'Submit Change'}
                  handleClick={() => handleSubmit}
                  container={classes.buttonOuter}
                  buttonClass={classes.buttonInner}
                  pending={isSubmitting}
                />
              </Box>
            </form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
}
export default PasswordSettings;

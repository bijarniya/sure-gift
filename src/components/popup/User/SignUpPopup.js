import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import useAuth from 'src/hooks/useAuth';
import { makeStyles, Grid, Box, Divider, Typography } from '@material-ui/core';
import Icons from 'src/components/Icons';
import LogoWithName from 'src/components/LogoWithName';
import SocialLoginButton from 'src/components/popup/User/SocialLoginButton';
import SignUpForm from 'src/components/popup/User/SignUpForm';
import { apiMessage, validationMessage } from 'src/constants/message';
import { getSuccess, getError } from 'src/redux/slices/error';
import { useDispatch } from 'react-redux';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    borderRadius: 30,
    background: `conic-gradient(${theme.palette.background.conic})`
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 30
  },
  loginBoxTop: {
    background: `conic-gradient(${theme.palette.background.conic})`,
    width: '100%',
    borderRadius: '30px 30px 0 0',
    padding: 10
  },
  loginBoxTopInner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: '30px 30px 0 0',
    border: `3px ${theme.palette.background.paper} solid`,
    padding: '30px 35px 33px 30px'
  },
  logoImage: {
    maxWidth: '100%',
    height: 'auto'
  },
  icons: {
    cursor: 'pointer',
    height: 16,
    width: 16
  },
  logoSection: {
    width: '97%'
  },
  loginBoxBottom: {
    width: '100%',
    minHeight: 300,
    borderRadius: '0 0 35px 35px',
    border: `1px ${theme.palette.common.white} solid`,
    borderTop: 0,
    backgroundColor: theme.palette.background.paper
  },
  contentBox: {
    display: 'flex',
    flexDirection: 'column',
    padding: '30px 40px 30px 40px'
  },
  signUpOuter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '30px 0px'
  },
  signup: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 14,
    fontWeight: 400,
    cursor: 'pointer'
  }
}));

// ----------------------------------------------------------------------
const SignInPopup = ({ closePopUp, onRemove, ...props }) => {
  const classes = useStyles();
  const { register } = useAuth();
  const dispatch = useDispatch();

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required(validationMessage.emailRequired)
      .email(validationMessage.emailInvalid),
    password: Yup.string()
      .required(validationMessage.passwordRequired)
      .min(8, validationMessage.passwordMin)
      .matches(
        '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$',
        validationMessage.passwordUppercaseAndLowercase
      ),
    firstName: Yup.string().required(validationMessage.firstName),
    lastName: Yup.string().required(validationMessage.lastName),
    termsCondition: Yup.boolean().oneOf(
      [true],
      validationMessage.termAndCondition
    ),
    confirmPassword: Yup.string()
      .required(validationMessage.confirmPassword)
      .when('password', {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref('password')],
          validationMessage.passwordAndConfirm
        )
      })
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      referrerCode: null,
      receiveLetters: true,
      termsCondition: false
    },
    validationSchema: LoginSchema,
    onSubmit: async (
      values,
      { setErrors, setSubmitting, resetForm, afterSubmit }
    ) => {
      try {
        await register({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
          referrerCode: values.referrerCode,
          receiveLetters: values.receiveLetters
        });
        dispatch(getSuccess(apiMessage.signupAndLogin));
      } catch (error) {
        dispatch(getError(error));
      }
    }
  });

  return (
    <Grid className={classes.root}>
      <Grid className={classes.content}>
        <Grid className={classes.loginBoxTop}>
          <Box className={classes.loginBoxTopInner}>
            <Box className={classes.logoSection}>
              <LogoWithName className={classes.logoImage} />
            </Box>
            <Icons
              url={'closeGray'}
              className={classes.icons}
              onClick={closePopUp}
            />
          </Box>
        </Grid>
        <Grid className={classes.loginBoxBottom}>
          <Grid className={classes.contentBox}>
            <SocialLoginButton />
            <SignUpForm formik={formik} />
          </Grid>
          <Divider />
          <Grid className={classes.signUpOuter}>
            <Typography
              className={classes.signup}
              onClick={() => onRemove('signInPopup')}
            >
              Already have an account?
              <span style={{ color: '#92FBB3' }}> Sign In</span>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignInPopup;

import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import LoginForm from './LoginForm';
import { Icon } from '@iconify/react';
import Page from 'src/components/Page';
import LogoWithName from 'src/components/LogoWithName';
import useAuth from 'src/hooks/useAuth';
import { useSnackbar } from 'notistack';
import closeFill from '@iconify-icons/eva/close-fill';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Grid } from '@material-ui/core';
import { MIconButton } from 'src/theme';
import { emailError, passwordError } from 'src/utils/helpError';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    background:
      'conic-gradient(from 151.11deg at 50% 50%, #CC9AC7 0deg, #A082F4 13.37deg, #A6E8F7 106.88deg, #FFF5DD 204.37deg, #FFF4D9 305.62deg, #CC9AC7 360deg)',
    fontFamily: theme.palette.font.fontFamily,
    fontWeight: 400,
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  content: {
    maxWidth: 430,
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 30,
    height: '100vh'
  },
  loginBoxTop: {
    background:
      'conic-gradient(from 151.11deg at 50% 50%, #CC9AC7 0deg, #A082F4 13.37deg, #A6E8F7 106.88deg, #FFF5DD 204.37deg, #FFF4D9 305.62deg, #CC9AC7 360deg)',
    width: '100%',
    borderRadius: '35px 35px 0 0',
    padding: 10
  },
  loginBoxTopInner: {
    borderRadius: '30px 30px 0 0',
    border: `3px ${theme.palette.background.paper} solid`,
    padding: '17px 22px 15px'
  },
  logoImage: {
    maxWidth: '100%',
    height: 'auto'
  },
  loginBoxBottom: {
    width: '100%',
    minHeight: 300,
    borderRadius: '0 0 35px 35px',
    border: `1px ${theme.palette.common.white} solid`,
    borderLeft: 0,
    borderTop: 0,
    padding: 40,
    backgroundColor: theme.palette.background.paper
  }
}));

// ----------------------------------------------------------------------

function LoginView() {
  const classes = useStyles();
  const { login } = useAuth();
  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required('User Name is required'),
    password: Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      email: 'demo@minimals.cc',
      password: 'demo1234',
      remember: true
    },
    validationSchema: LoginSchema,
    onSubmit: async (
      values,
      { setErrors, setSubmitting, resetForm, afterSubmit }
    ) => {
      try {
        await login({
          email: values.email,
          password: values.password
        });
        enqueueSnackbar('Login success', {
          variant: 'success',
          action: (key) => (
            <MIconButton size="small" onClick={() => closeSnackbar(key)}>
              <Icon icon={closeFill} />
            </MIconButton>
          )
        });
        if (isMountedRef.current) {
          setSubmitting(false);
        }
      } catch (error) {
        enqueueSnackbar(
          emailError(error.code || error.message).helperText ||
          passwordError(error.code || error.message).helperText,
          {
            variant: 'error',
            action: (key) => (
              <MIconButton size="small" onClick={() => closeSnackbar(key)}>
                <Icon icon={closeFill} />
              </MIconButton>
            )
          }
        );
        resetForm();
        /*if (isMountedRef.current) {
          setSubmitting(false);
          setErrors({ afterSubmit: error.code || error.message });
        }*/
      }
    }
  });

  return (
    <Page title="Sign In" className={classes.root}>
      <Container maxWidth="sm">
        <Grid className={classes.content}>
          <Box className={classes.loginBoxTop}>
            <Box className={classes.loginBoxTopInner}>
              <LogoWithName className={classes.logoImage} />
            </Box>
          </Box>
          <Box className={classes.loginBoxBottom}>
            <LoginForm formik={formik} />
          </Box>
        </Grid>
      </Container>
    </Page>
  );
}

export default LoginView;

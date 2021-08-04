import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';
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
    padding: '0px 0px',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 0px'
    }
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
  consentBox: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.gray,
    fontSize: 14,
    fontWeight: 400,
    marginTop: 30
  },
  encryptedSec: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.gray,
    fontSize: 14,
    fontWeight: 400,
    marginTop: 20
  },
  checkBoxOuter: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20
  },
  checkBox: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 16,
    fontWeight: 400,
    color: '#EAEDF0 !important',
    '& .checked': {
      color: '#EAEDF0 !important'
    }
  },
  checkBoxInner: {
    marginLeft: 40
  },
  helperText: {
    marginTop: 0
  }
}));

function ProfileInformation({ profile }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { updateProfile } = useAuth();

  const {
    firstName,
    lastName,
    email,
    address,
    phoneNumber,
    receiveSmsLetter,
    receiveEmailLetter
  } = profile;

  const profileSchema = Yup.object().shape({
    email: Yup.string()
      .required(validationMessage.emailRequired)
      .email(validationMessage.emailInvalid),
    firstName: Yup.string().required(validationMessage.firstName),
    lastName: Yup.string().required(validationMessage.lastName),
    phoneNumber: Yup.string()
      .required(validationMessage.phoneRequired)
      .matches('^(?=.*?[0-9]).{0,}$', validationMessage.phoneNumber)
      .min(10, validationMessage.phoneMin)
      .max(10, validationMessage.phoneMin),
    address: Yup.string().required(validationMessage.address)
  });

  return (
    <Grid container>
      <Grid item xs={12} className={classes.root}>
        <Typography className={classes.heading}>Profile Information</Typography>
        <Formik
          enableReinitialize
          initialValues={{
            firstName: firstName || '',
            lastName: lastName || '',
            email: email || '',
            address: address || '',
            phoneNumber: phoneNumber || '',
            receiveSmsLetter: receiveSmsLetter || false,
            receiveEmailLetter: receiveEmailLetter || false
          }}
          validationSchema={profileSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              await updateProfile({
                firstName: values.firstName,
                lastName: values.lastName,
                address: values.address,
                phone: values.phoneNumber,
                receiveSmsLetter: values.receiveSmsLetter,
                receiveEmailLetter: values.receiveEmailLetter
              });
              dispatch(getSuccess(apiMessage.profileUpdated));
            } catch (error) {
              dispatch(getError(error));
            }
          }}
        >
          {({
            errors,
            touched,
            isSubmitting,
            handleSubmit,
            getFieldProps,
            values
          }) => (
            <form onSubmit={handleSubmit}>
              <Grid className={classes.mainContainer}>
                <Box className={classes.leftBox}>
                  <label className={classes.labelText}>First Name</label>
                  <TextField
                    fullWidth
                    type="text"
                    placeholder="Enter first name"
                    {...getFieldProps('firstName')}
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
                    error={Boolean(touched.firstName && errors.firstName)}
                    helperText={
                      touched.firstName && errors.firstName && errors.firstName
                    }
                  />
                </Box>
                <Box className={classes.rightBox}>
                  <label className={classes.labelText}>Last name</label>
                  <TextField
                    fullWidth
                    type="text"
                    placeholder="Enter last name"
                    {...getFieldProps('lastName')}
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
                    error={Boolean(touched.lastName && errors.lastName)}
                    helperText={
                      touched.lastName && errors.lastName && errors.lastName
                    }
                  />
                </Box>
              </Grid>

              <Grid className={classes.mainContainer}>
                <Box className={classes.leftBox}>
                  <label className={classes.labelText}>Email</label>
                  <TextField
                    fullWidth
                    type="text"
                    placeholder="Enter email"
                    {...getFieldProps('email')}
                    disabled={true}
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
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email && errors.email}
                  />
                </Box>
                <Box className={classes.rightBox}>
                  <label className={classes.labelText}>Phone</label>
                  <TextField
                    fullWidth
                    type="text"
                    placeholder="Enter phone number"
                    {...getFieldProps('phoneNumber')}
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
                    error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                    helperText={
                      touched.phoneNumber &&
                      errors.phoneNumber &&
                      errors.phoneNumber
                    }
                  />
                </Box>
              </Grid>

              <Grid className={classes.fullContainer}>
                <label className={classes.labelText}>Address</label>
                <TextField
                  fullWidth
                  type="text"
                  placeholder="Enter address"
                  {...getFieldProps('address')}
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
                  error={Boolean(touched.address && errors.address)}
                  helperText={
                    touched.address && errors.address && errors.address
                  }
                />
              </Grid>
              <Typography className={classes.consentBox}>
                So that SureGifts may serve you Better, pls consent to receive:
              </Typography>
              <Box className={classes.checkBoxOuter}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={values.receiveEmailLetter}
                      {...getFieldProps('receiveEmailLetter')}
                      classes={{
                        root: classes.checkBox,
                        checked: classes.checkBox
                      }}
                    />
                  }
                  label="Emails"
                />
                <Box className={classes.checkBoxInner}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.receiveSmsLetter}
                        {...getFieldProps('receiveSmsLetter')}
                        classes={{
                          root: classes.checkBox,
                          checked: classes.checkBox
                        }}
                      />
                    }
                    label="SMS message"
                  />
                </Box>
              </Box>
              <Typography className={classes.encryptedSec}>
                When we send you an email or SMS, the informations not
                encrypted. This means a third party may be able to access the
                infromations
              </Typography>
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
export default ProfileInformation;

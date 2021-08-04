import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography, TextField } from '@material-ui/core';
import { Formik } from 'formik';
import ButtonLoading from 'src/components/Common/ButtonLoading';
import { useHistory } from 'react-router-dom';
import { PATH_ACCOUNT } from 'src/routes/paths';
import * as Yup from 'yup';
import { apiMessage, validationMessage } from 'src/constants/message';
import { getSuccess, getError } from 'src/redux/slices/error';
import { addContact, editContact } from 'src/redux/slices/contacts';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

// --------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0px 25px',
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
  helperText: {
    marginTop: 0
  }
}));

function ContactsForm() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { contactList } = useSelector((state) => state.contacts);
  // get query string
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  let temp = {};
  // get data from reducer
  if (contactList && contactList.length > 0 && id) {
    temp = _.find(contactList, (v) => v.id === Number(id));
  }

  const contactSchema = Yup.object().shape({
    firstName: Yup.string().required(validationMessage.firstName),
    lastName: Yup.string().required(validationMessage.lastName),
    email: Yup.string()
      .required(validationMessage.emailRequired)
      .email(validationMessage.emailInvalid),
    address: Yup.string().required(validationMessage.address),
    phone: Yup.string()
      .required(validationMessage.phoneRequired)
      .matches('^(?=.*?[0-9]).{0,}$', validationMessage.phoneNumber)
      .min(10, validationMessage.phoneMin)
      .max(10, validationMessage.phoneMin)
  });

  return (
    <Grid container>
      <Grid item xs={12} className={classes.root}>
        <Typography className={classes.heading}>
          {id ? 'Update' : 'New'} Contact Information
        </Typography>
        <Formik
          enableReinitialize
          initialValues={{
            firstName: temp.firstName || '',
            lastName: temp.lastName || '',
            email: temp.email || '',
            address: temp.address || '',
            phone: temp.phone || '',
            events: temp.events || []
          }}
          validationSchema={contactSchema}
          onSubmit={async (values) => {
            try {
              if (id) {
                values.contactId = id;
                await dispatch(editContact(values));
                dispatch(getSuccess(apiMessage.contactUpdated));
              } else {
                await dispatch(addContact(values));
                dispatch(getSuccess(apiMessage.contactAdded));
              }
              history.push(PATH_ACCOUNT.contactsList);
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
                    {...getFieldProps('phone')}
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
                    error={Boolean(touched.phone && errors.phone)}
                    helperText={touched.phone && errors.phone && errors.phone}
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
              <Box className={classes.buttonBox}>
                <ButtonLoading
                  title={id ? 'Update contact' : 'Save new contact'}
                  handleClick={() => handleSubmit}
                  container={classes.buttonOuter}
                  buttonClass={classes.buttonInner}
                />
              </Box>
            </form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
}
export default ContactsForm;

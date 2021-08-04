import React, { useState } from 'react';
import { makeStyles, Grid, TextField, Box } from '@material-ui/core';
import Icons from 'src/components/Icons';
import { Formik } from 'formik';
import ButtonLoading from 'src/components/Common/ButtonLoading';
import * as Yup from 'yup';
import { apiMessage, validationMessage } from 'src/constants/message';
import { getSuccess, getError } from 'src/redux/slices/error';
import { sendEnquiry } from 'src/redux/slices/sendEnquiry';
import { useDispatch } from 'react-redux';

// -----------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '40px 109px 80px 100px',
    height: '100vh',
    [theme.breakpoints.down('md')]: {
      padding: '40px 20px 80px 20px'
    }
  },
  topBox: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
  },
  topInner: {
    width: '97%'
  },
  icons: {
    cursor: 'pointer'
  },
  boxOuter: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  },
  boxInner: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minHeight: '90%'
  },
  textField: {
    width: '100%',
    background: theme.palette.background.main,
    border: 'none'
  },
  input: {
    border: 'none',
    fontSize: 72,
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 400,
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 30
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 20
    }
  },
  bottomContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'end',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  leftBox: {
    display: 'flex',
    flexDirection: 'row',
    width: '50%',
    paddingLeft: 20,
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  rightBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '50%',
    paddingRight: 50,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 28
    }
  },
  buttonOuter: {
    display: 'flex',
    flexDirection: 'row',
    background: theme.palette.background.secondary,
    borderRadius: 18,
    padding: 1,
    width: 270,
    [theme.breakpoints.down('md')]: {
      width: 200
    }
  },
  buttonInner: {
    background: theme.palette.background.secondary,
    border: `2px solid ${theme.palette.background.secondary}`,
    color: theme.palette.text.gray,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 18,
    boxShadow: 'none',
    borderRadius: 18,
    fontWeight: 700,
    margin: 1,
    padding: '29px 20px 29px 25px',
    '&:hover': {
      backgroundColor: theme.palette.background.secondary,
      padding: '29px 20px 29px 25px',
      boxShadow: 'none',
      borderRadius: 18
    },
    [theme.breakpoints.down('md')]: {
      padding: '29px 20px 29px 25px'
    }
  },
  buttonOuterOne: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    background: theme.palette.text.primary,
    borderRadius: 18,
    padding: 1,
    width: 270,
    [theme.breakpoints.down('md')]: {
      width: 200
    }
  },
  buttonInnerOne: {
    background: theme.palette.text.primary,
    border: `2px solid ${theme.palette.text.primary}`,
    color: theme.palette.text.dark,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 18,
    boxShadow: 'none',
    borderRadius: 18,
    fontWeight: 700,
    margin: 1,
    padding: '29px 20px 29px 25px',
    '&:hover': {
      backgroundColor: theme.palette.text.primary,
      padding: '29px 20px 29px 25px',
      boxShadow: 'none',
      borderRadius: 18
    },
    [theme.breakpoints.down('md')]: {
      padding: '29px 20px 29px 25px'
    }
  },
  leftArrowOuter: {
    display: 'flex',
    cursor: 'pointer'
  },
  leftArrow: {
    width: 60,
    background: theme.palette.background.secondary,
    borderRadius: 21,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20
  },
  helperText: {
    marginTop: 0,
    color: '#FF4842'
  }
}));

// ----------------------------------------------------------------------
const StepOnePopup = ({ closePopUp, ...props }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [steps, setSteps] = useState(1);

  const handleBackArrow = (v) => setSteps(v);

  const eventSchema = Yup.object().shape({
    name: Yup.string().required(validationMessage.name),
    email: Yup.string()
      .required(validationMessage.emailRequired)
      .email(validationMessage.emailInvalid),
    phone: Yup.string()
      .required(validationMessage.phoneRequired)
      .matches('^(?=.*?[0-9]).{0,}$', validationMessage.phoneNumber)
      .min(10, validationMessage.phoneMin)
      .max(10, validationMessage.phoneMin),
    subject: Yup.string().required(validationMessage.subject),
    message: Yup.string().required(validationMessage.message)
  });

  return (
    <Grid className={classes.root} item xs={12}>
      <Box className={classes.topBox}>
        <Box className={classes.topInner}>
          <Icons className={classes.logoImage} url={'logo'} />
        </Box>
        <Icons
          url={'closePopup'}
          className={classes.icons}
          height={30}
          width={30}
          onClick={closePopUp}
        />
      </Box>
      <Formik
        enableReinitialize
        initialValues={{
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        }}
        validationSchema={eventSchema}
        onSubmit={async (values) => {
          try {
            await dispatch(sendEnquiry(values));
            dispatch(getSuccess(apiMessage.sendAdded));
            closePopUp();
          } catch (error) {
            dispatch(getError(error));
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          getFieldProps,
          handleChange,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid className={classes.boxOuter}>
              <Box className={classes.boxInner}>
                {
                  {
                    1: (
                      <TextField
                        fullWidth
                        type="text"
                        variant="outlined"
                        placeholder="Your name"
                        {...getFieldProps('name')}
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true
                        }}
                        InputProps={{
                          className: classes.input,
                          classes: { notchedOutline: classes.input }
                        }}
                        FormHelperTextProps={{
                          classes: { root: classes.helperText }
                        }}
                        error={Boolean(touched.name && errors.name)}
                        helperText={touched.name && errors.name && errors.name}
                      />
                    ),
                    2: (
                      <TextField
                        fullWidth
                        type="text"
                        variant="outlined"
                        placeholder="Your email"
                        {...getFieldProps('email')}
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true
                        }}
                        InputProps={{
                          className: classes.input,
                          classes: { notchedOutline: classes.input }
                        }}
                        FormHelperTextProps={{
                          classes: { root: classes.helperText }
                        }}
                        error={Boolean(touched.email && errors.email)}
                        helperText={
                          touched.email && errors.email && errors.email
                        }
                      />
                    ),
                    3: (
                      <TextField
                        fullWidth
                        type="text"
                        variant="outlined"
                        placeholder="Your phone"
                        {...getFieldProps('phone')}
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true
                        }}
                        InputProps={{
                          className: classes.input,
                          classes: { notchedOutline: classes.input }
                        }}
                        FormHelperTextProps={{
                          classes: { root: classes.helperText }
                        }}
                        error={Boolean(touched.phone && errors.phone)}
                        helperText={
                          touched.phone && errors.phone && errors.phone
                        }
                      />
                    ),
                    4: (
                      <TextField
                        fullWidth
                        type="text"
                        variant="outlined"
                        placeholder="Your subject"
                        {...getFieldProps('subject')}
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true
                        }}
                        InputProps={{
                          className: classes.input,
                          classes: { notchedOutline: classes.input }
                        }}
                        FormHelperTextProps={{
                          classes: { root: classes.helperText }
                        }}
                        error={Boolean(touched.subject && errors.subject)}
                        helperText={
                          touched.subject && errors.subject && errors.subject
                        }
                      />
                    ),
                    5: (
                      <TextField
                        fullWidth
                        type="text"
                        variant="outlined"
                        placeholder="Your message"
                        {...getFieldProps('message')}
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true
                        }}
                        InputProps={{
                          className: classes.input,
                          classes: { notchedOutline: classes.input }
                        }}
                        FormHelperTextProps={{
                          classes: { root: classes.helperText }
                        }}
                        error={Boolean(touched.subject && errors.subject)}
                        helperText={
                          touched.subject && errors.subject && errors.subject
                        }
                      />
                    )
                  }[steps]
                }
              </Box>
              <Grid item xs={12} className={classes.bottomContainer}>
                <Box className={classes.leftBox}>
                  {
                    {
                      1: (
                        <ButtonLoading
                          title={'Continue'}
                          handleClick={() =>
                            handleBackArrow(values && values.name ? 2 : 1)
                          }
                          container={
                            values && values.name
                              ? classes.buttonOuterOne
                              : classes.buttonOuter
                          }
                          buttonClass={
                            values && values.name
                              ? classes.buttonInnerOne
                              : classes.buttonInner
                          }
                          status={true}
                          icon={
                            values && values.name
                              ? 'blackRightArrow'
                              : 'continueRightArrow'
                          }
                        />
                      ),
                      2: (
                        <Box className={classes.leftArrowOuter}>
                          <Box
                            className={classes.leftArrow}
                            onClick={() => handleBackArrow(1)}
                          >
                            <Icons url={'leftArroWhite'} />
                          </Box>
                          <ButtonLoading
                            title={'Continue'}
                            handleClick={() => handleBackArrow(3)}
                            container={classes.buttonOuterOne}
                            buttonClass={classes.buttonInnerOne}
                            status={true}
                            icon={'blackRightArrow'}
                          />
                        </Box>
                      ),
                      3: (
                        <Box className={classes.leftArrowOuter}>
                          <Box
                            className={classes.leftArrow}
                            onClick={() => handleBackArrow(2)}
                          >
                            <Icons url={'leftArroWhite'} />
                          </Box>
                          <ButtonLoading
                            title={'Continue'}
                            handleClick={() => handleBackArrow(4)}
                            container={classes.buttonOuterOne}
                            buttonClass={classes.buttonInnerOne}
                            status={true}
                            icon={'blackRightArrow'}
                          />
                        </Box>
                      ),
                      4: (
                        <Box className={classes.leftArrowOuter}>
                          <Box
                            className={classes.leftArrow}
                            onClick={() => handleBackArrow(3)}
                          >
                            <Icons url={'leftArroWhite'} />
                          </Box>
                          <ButtonLoading
                            title={'Continue'}
                            handleClick={() => handleBackArrow(5)}
                            container={classes.buttonOuterOne}
                            buttonClass={classes.buttonInnerOne}
                            status={true}
                            icon={'blackRightArrow'}
                          />
                        </Box>
                      ),
                      5: (
                        <Box className={classes.leftArrowOuter}>
                          <Box
                            className={classes.leftArrow}
                            onClick={() => handleBackArrow(4)}
                          >
                            <Icons url={'leftArroWhite'} />
                          </Box>
                          <ButtonLoading
                            title={'Continue'}
                            handleClick={handleSubmit}
                            container={classes.buttonOuterOne}
                            buttonClass={classes.buttonInnerOne}
                            status={true}
                            icon={'blackRightArrow'}
                          />
                        </Box>
                      )
                    }[steps]
                  }
                </Box>
                <Box className={classes.rightBox}>
                  {steps === 2 ? (
                    <Icons url={'circleTwo'} />
                  ) : (
                    <Icons url={'circleOne'} />
                  )}
                </Box>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Grid>
  );
};

export default StepOnePopup;

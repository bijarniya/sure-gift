import React from 'react';
import { makeStyles, Grid, TextField, Box } from '@material-ui/core';
import Icons from 'src/components/Icons';
import { Formik } from 'formik';
import ButtonLoading from 'src/components/Common/ButtonLoading';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '30px 40px 40px 40px'
  },
  topBox: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10
  },
  heading: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontSize: 24,
    fontWeight: 700,
    width: '97%'
  },
  icons: {
    cursor: 'pointer'
  },
  fullContainer: {
    marginTop: 40
  },
  labelText: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 10,
    display: 'block',
    minHeight: 20
  },
  input: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.fontFamily,
    fontWeight: 600,
    fontSize: 16,
    borderRadius: 12,
    height: 52,
    '&::placeholder': {
      color: theme.palette.text.primary
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
    width: '100%',
    borderRadius: 18,
    padding: 0,
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  buttonInner: {
    background: theme.palette.text.primary,
    border: `0px solid ${theme.palette.text.primary}`,
    color: theme.palette.background.main,
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
    justifyContent: 'center',
    marginTop: 50,
    width: '100%'
  }
}));

// ----------------------------------------------------------------------
const PaypalPopup = ({ closePopUp, onRemove, ...props }) => {
  const classes = useStyles();
  const { data } = props;

  return (
    <Grid className={classes.root}>
      <Box className={classes.topBox}>
        <Box className={classes.heading}>{data && data.title}</Box>
        <Icons
          url={'closePopup'}
          className={classes.icons}
          height={30}
          width={30}
          onClick={closePopUp}
        />
      </Box>
      <Formik
        initialValues={{
          amount: ''
        }}
        validate={(values) => {
          const errors = {};
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          onRemove('paymentSuccessfulPopup');
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleSubmit,
          handleChange,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid className={classes.fullContainer}>
              <label className={classes.labelText}>Amount</label>
              <TextField
                fullWidth
                type="text"
                name="name"
                onChange={handleChange}
                value={values.title}
                placeholder=""
                InputLabelProps={{
                  shrink: true
                }}
                InputProps={{
                  className: classes.input,
                  classes: {
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline
                  }
                }}
              />
            </Grid>
            <Box className={classes.buttonBox}>
              <ButtonLoading
                title={'Pay'}
                handleClick={() => ''}
                container={classes.buttonOuter}
                buttonClass={classes.buttonInner}
              />
            </Box>
          </form>
        )}
      </Formik>
    </Grid>
  );
};

export default PaypalPopup;

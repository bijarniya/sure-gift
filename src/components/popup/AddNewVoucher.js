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
    padding: 40
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
  labelText: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 10,
    display: 'block',
    minHeight: 20
  },
  labelTextOne: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.gray,
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 10,
    display: 'block',
    minHeight: 20
  },
  textField: {
    width: '100%'
  },
  input: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.fontFamily,
    fontWeight: 600,
    fontSize: 16,
    borderRadius: 12,
    height: 52,
    '&::placeholder': {
      //color: `${theme.palette.text.primary} !important`
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
    justifyContent: 'center',
    marginTop: 50,
    width: '100%'
  }
}));

// ----------------------------------------------------------------------
const AddNewVoucher = ({ closePopUp, ...props }) => {
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
          voucherCode: '2345 8234 4533 2233',
          merchants: 'SureGifts Generic',
          securityCode: '',
          expiryDate: ''
        }}
        validate={(values) => {
          const errors = {};
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
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
            <Grid className={classes.mainContainer}>
              <Box className={classes.leftBox}>
                <label className={classes.labelTextOne}>Voucher Code</label>
                <TextField
                  fullWidth
                  name="voucherCode"
                  value={values.voucherCode}
                  type="text"
                  onChange={handleChange}
                  placeholder="Enter voucher code"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                  InputProps={{
                    className: classes.input,
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                      input: classes.input
                    }
                  }}
                />
              </Box>
              <Box className={classes.rightBox}>
                <label className={classes.labelTextOne}> Merchants</label>
                <TextField
                  fullWidth
                  name="merchants"
                  value={values.merchants}
                  type="text"
                  onChange={handleChange}
                  placeholder="Enter Merchant Name"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                  InputProps={{
                    className: classes.input,
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                      input: classes.input
                    }
                  }}
                />
              </Box>
            </Grid>

            <Grid className={classes.mainContainer}>
              <Box className={classes.leftBox}>
                <label className={classes.labelText}>Security Code</label>
                <TextField
                  fullWidth
                  name="securityCode"
                  value={values.securityCode}
                  type="text"
                  onChange={handleChange}
                  placeholder="Enter security code"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                  InputProps={{
                    className: classes.input,
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                      input: classes.input
                    }
                  }}
                />
              </Box>
              <Box className={classes.rightBox}>
                <label className={classes.labelText}> Expiry Date</label>
                <TextField
                  fullWidth
                  name="expiryDate"
                  value={values.expiryDate}
                  type="text"
                  onChange={handleChange}
                  placeholder="Enter Expiry Date"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                  InputProps={{
                    className: classes.input,
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                      input: classes.input
                    }
                  }}
                />
              </Box>
            </Grid>

            <Box className={classes.buttonBox}>
              <ButtonLoading
                title={'Save New Voucher'}
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

export default AddNewVoucher;

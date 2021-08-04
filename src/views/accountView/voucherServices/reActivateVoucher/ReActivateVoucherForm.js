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

// --------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {},
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
  checkBox: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 16,
    fontWeight: 400,
    color: '#EAEDF0 !important',
    '& .checked': {
      color: '#EAEDF0 !important'
    }
  }
}));

function ReActivateVoucherForm() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} className={classes.root}>
        <Typography className={classes.heading}>Reactivate Voucher</Typography>
        <Formik
          initialValues={{
            voucherCode: '',
            securityCode: '1234',
            agree: false
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
                  <label className={classes.labelText}>Voucher Code</label>
                  <TextField
                    fullWidth
                    name="voucherCode"
                    type="text"
                    placeholder="Enter voucher code here"
                    value={values.voucherCode}
                    onChange={handleChange}
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
                  />
                </Box>
                <Box className={classes.rightBox}>
                  <label className={classes.labelText}>Security Code</label>
                  <TextField
                    fullWidth
                    type="password"
                    value={values.securityCode}
                    name="securityCode"
                    onChange={handleChange}
                    placeholder="Enter security code here"
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
                  />
                </Box>
              </Grid>
              <Grid className={classes.fullContainer}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={values.agree}
                      onChange={handleChange}
                      name="agree"
                      classes={{
                        root: classes.checkBox,
                        checked: classes.checkBox
                      }}
                    />
                  }
                  label="I agree that Reactivating this voucher will result in a 20% deduction of my voucher value"
                />
              </Grid>
              <Box className={classes.buttonBox}>
                <ButtonLoading
                  title={'Reactivate'}
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
export default ReActivateVoucherForm;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Box,
  Typography,
  TextField,
  Select,
  MenuItem
} from '@material-ui/core';
import { Formik } from 'formik';
import ButtonLoading from 'src/components/Common/ButtonLoading';

// --------------------------------------
const numberOfVouchersList = [1, 2, 3, 4, 5, 6];

// ---------------------------------------------
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
  selectBox: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.fontFamily,
    width: '100%',
    fontSize: 16,
    fontWeight: 600,
    height: 52,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    '& .MuiSelect-icon': {
      color: `${theme.palette.text.primary} !important`
    },
    '& .MuiSelect-outlined': {
      paddingLeft: 13
    }
  },
  labelTextOne: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.gray,
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 10,
    display: 'block'
  }
}));

function SplitVoucherForm() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} className={classes.root}>
        <Typography className={classes.heading}>Split Voucher</Typography>
        <Formik
          initialValues={{
            voucherCode: '',
            voucherValue: '',
            numberOfVouchers: numberOfVouchersList[0]
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
              <Grid className={classes.fullContainer}>
                <label className={classes.labelText}>Voucher Code</label>
                <TextField
                  fullWidth
                  type="text"
                  value={values.voucherCode}
                  name="voucherCode"
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
                      notchedOutline: classes.notchedOutline
                    }
                  }}
                />
              </Grid>
              <Grid className={classes.mainContainer}>
                <Box className={classes.leftBox}>
                  <label className={classes.labelTextOne}>
                    Number of vouchers
                  </label>
                  <Select
                    variant="outlined"
                    id="numberOfVouchers"
                    value={values.numberOfVouchers}
                    name="numberOfVouchers"
                    onChange={handleChange}
                    defaultValue={numberOfVouchersList[0]}
                    className={classes.selectBox}
                    inputProps={{
                      classes: {
                        root: classes.selectBox,
                        icon: classes.iconSelect
                      }
                    }}
                  >
                    {numberOfVouchersList &&
                      numberOfVouchersList.length > 0 &&
                      numberOfVouchersList.map((ff, index) => {
                        return (
                          <MenuItem key={index} value={ff}>
                            {ff}
                          </MenuItem>
                        );
                      })}
                  </Select>
                </Box>
                <Box className={classes.rightBox}>
                  <label className={classes.labelText}>Voucher Value</label>
                  <TextField
                    fullWidth
                    type="text"
                    value={values.voucherValue}
                    name="voucherValue"
                    onChange={handleChange}
                    placeholder="Enter voucher value"
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
              <Box className={classes.buttonBox}>
                <ButtonLoading
                  title={'Split'}
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
export default SplitVoucherForm;

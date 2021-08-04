import React from 'react';
import {
  makeStyles,
  Grid,
  TextField,
  Box,
  Select,
  MenuItem,
  Typography
} from '@material-ui/core';
import Icons from 'src/components/Icons';
import { Formik } from 'formik';
import ButtonLoading from 'src/components/Common/ButtonLoading';

// --------------------------------------
const accountUsedList = [''];

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
    marginTop: 30
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
  },
  iconSelect: {
    fill: theme.palette.text.primary
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
  makePayment: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 14,
    fontWeight: 400,
    marginTop: 10,
    marginBottom: 6,
    width: '85%'
  },
  contentBox: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginTop: 24
  },
  bankName: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 16,
    fontWeight: 700,
    width: '50%'
  },
  aNumber: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 16,
    fontWeight: 700,
    width: '50%'
  }
}));

// ----------------------------------------------------------------------
const BankDepositPopup = ({ closePopUp, onRemove, ...props }) => {
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
      <Typography className={classes.makePayment}>
        Please make payment into any of the accounts listed and then fill in the
        frim below.
      </Typography>

      <Box className={classes.contentBox}>
        <Typography className={classes.bankName}>
          Guaranty Trust Bank
        </Typography>
        <Typography className={classes.aNumber}>0165524077</Typography>
      </Box>
      <Box className={classes.contentBox}>
        <Typography className={classes.bankName}>
          United Bank of Africa
        </Typography>
        <Typography className={classes.aNumber}>012325523</Typography>
      </Box>
      <Box className={classes.contentBox}>
        <Typography className={classes.bankName}>Zentith Bank</Typography>
        <Typography className={classes.aNumber}>192342318</Typography>
      </Box>

      <Formik
        initialValues={{
          name: '',
          amount: '',
          date: '',
          reference: '',
          accountUsed: accountUsedList[0]
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
            <Grid className={classes.fullContainer} style={{ marginTop: 40 }}>
              <label className={classes.labelText}>Depositors name</label>
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
            <Grid className={classes.mainContainer}>
              <Box className={classes.leftBox}>
                <label className={classes.labelText}>Amount</label>
                <TextField
                  fullWidth
                  name="amont"
                  value={values.start}
                  type="text"
                  onChange={handleChange}
                  placeholder=""
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
                <label className={classes.labelText}>Date</label>
                <TextField
                  fullWidth
                  name="date"
                  value={values.start}
                  type="text"
                  onChange={handleChange}
                  placeholder=""
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
              <label className={classes.labelText}>Reference Number</label>
              <TextField
                fullWidth
                type="text"
                name="reference"
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
            <Grid className={classes.fullContainer}>
              <label className={classes.labelText}>Account used</label>
              <Select
                variant="outlined"
                id="accountUsed"
                value={values.repeat}
                name="accountUsed"
                onChange={handleChange}
                defaultValue={accountUsedList[0]}
                className={classes.selectBox}
                inputProps={{
                  classes: {
                    root: classes.selectBox,
                    icon: classes.iconSelect
                  }
                }}
              >
                {accountUsedList &&
                  accountUsedList.length > 0 &&
                  accountUsedList.map((ff, index) => {
                    return (
                      <MenuItem key={index} value={ff}>
                        {ff}
                      </MenuItem>
                    );
                  })}
              </Select>
            </Grid>

            <Box className={classes.buttonBox}>
              <ButtonLoading
                title={'Upload'}
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

export default BankDepositPopup;

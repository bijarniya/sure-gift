import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography, TextField } from '@material-ui/core';
import { Formik } from 'formik';
import ButtonLoading from 'src/components/Common/ButtonLoading';
import { useDialogBox } from 'src/components/popup/common/useDialogBox';
import OpenDialog from 'src/components/popup/common/OpenDialog';

// -----------------------------------------
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
  buttonOuterAdd: {
    background: theme.palette.background.main,
    display: 'flex',
    flexDirection: 'row',
    width: 160,
    borderRadius: 18,
    marginTop: 40,
    marginLeft: 10,
    padding: 0,
    [theme.breakpoints.down('md')]: {
      width: 160
    }
  },
  buttonInnerAdd: {
    background: theme.palette.background.main,
    border: `0px solid ${theme.palette.text.primary}`,
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 14,
    boxShadow: 'none',
    borderRadius: 18,
    fontWeight: 400,
    margin: 0,
    padding: '0px 16.5px',
    '&:hover': {
      background: theme.palette.background.main,
      boxShadow: 'none',
      borderRadius: 18
    },
    [theme.breakpoints.down('md')]: {
      padding: '0px 0px'
    }
  },
  addNewEventSec: {
    width: '490px',
    minHeight: '300px',
    background: 'rgba(0, 0, 0, 0.8)',
    borderRadius: '35px',
    border: `1px ${theme.palette.text.primary} solid`
  }
}));

function MergeVoucherForm() {
  const classes = useStyles();

  // popup start
  const { dialogBoxName, openDialogBox, closeDialogBox } = useDialogBox();
  const [selectedData, setData] = useState();
  // popup list data
  const popupList = [
    {
      title: '',
      description: 'Voucher Sent to mail',
      popup: 'mergeFailedPopup',
      width: 80,
      message: {
        title: 'Merge Failed',
        description:
          'Sorry one of these voucher has already been used on an Online Store'
      }
    }
  ];

  // set popup data
  const setSelectedData = (popupName, row) => {
    const filterData = popupList.filter((item) => {
      return item.popup === popupName || item.title === popupName;
    });
    if (filterData && filterData.length) {
      filterData[0].merchantData = row;
      setData(filterData[0]);
    }
  };

  // set dynamic popup name
  const openPopup = (popupName, row) => {
    openDialogBox(popupName);
    setSelectedData(popupName, row);
  };

  const confirmRemove = () => {};
  // popup end

  return (
    <Grid container>
      <Grid item xs={12} className={classes.root}>
        <Typography className={classes.heading}>Merge Voucher</Typography>
        <Formik
          initialValues={{
            voucherCode: '',
            voucherCodeOne: ''
          }}
          validate={(values) => {
            const errors = {};
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            openPopup('mergeFailedPopup');
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
                  <label className={classes.labelText}>Voucher Code 1</label>
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
                </Box>
                <Box className={classes.rightBox}>
                  <label className={classes.labelText}>Voucher Code 1</label>
                  <TextField
                    fullWidth
                    type="text"
                    value={values.voucherCodeOne}
                    name="voucherCodeOne"
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
                </Box>
              </Grid>
              <Box className={classes.buttonBox}>
                <ButtonLoading
                  title={'Merge'}
                  handleClick={() => handleSubmit}
                  container={classes.buttonOuter}
                  buttonClass={classes.buttonInner}
                />
                <ButtonLoading
                  title={'Add Voucher'}
                  handleClick={() => handleSubmit}
                  container={classes.buttonOuterAdd}
                  buttonClass={classes.buttonInnerAdd}
                />
              </Box>
            </form>
          )}
        </Formik>
      </Grid>
      {!!dialogBoxName && (
        <OpenDialog
          componentName={dialogBoxName}
          open={true}
          closeBox={closeDialogBox}
          data={selectedData}
          onRemove={confirmRemove}
          containerStyle={classes.addNewEventSec}
          center={true}
        />
      )}
    </Grid>
  );
}
export default MergeVoucherForm;

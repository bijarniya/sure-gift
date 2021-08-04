import React from 'react';
import {
  makeStyles,
  Grid,
  TextField,
  Box,
  TextareaAutosize
} from '@material-ui/core';
import Icons from 'src/components/Icons';
import { LoadingButton } from '@material-ui/lab';
import { Formik } from 'formik';
import clsx from 'clsx';

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
    flexDirection: 'row'
  },
  heading: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    fontSize: '24px',
    width: '97%'
  },
  icons: {
    cursor: 'pointer'
  },
  label: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 'bold',
    fontSize: '14px',
    color: theme.palette.text.gray,
    display: 'block'
  },
  textField: {
    width: '100%',
    background: theme.palette.background.paper
  },
  input: {
    marginTop: 10,
    border: '1px solid rgba(255, 255, 255, 0.3)',
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 16,
    borderRadius: 12,
    color: theme.palette.text.primary,
    '&:focused': {
      border: '1px solid rgba(255, 255, 255, 0.3)'
    },
    '&::placeholder': {
      color: theme.palette.text.primary
    }
  },
  descriptionInput: {
    marginTop: 10,
    padding: '10px !important',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 16,
    borderRadius: 12,
    height: '85px !important',
    color: theme.palette.text.primary,
    '&:focused': {
      border: '1px solid rgba(255, 255, 255, 0.3)'
    },
    '&::placeholder': {
      color: theme.palette.text.primary
    }
  },
  topMargin: {
    marginTop: 20
  },
  button: {
    backgroundColor: theme.palette.button.primary,
    borderRadius: 18,
    fontSize: 14,
    width: 'auto',
    color: theme.palette.text.dark,
    padding: '21.5px 76px 21.5px 76px',
    boxShadow: '0 0px 0px 0 rgb(0 171 85 / 24%) !important',
    '&:hover': {
      backgroundColor: theme.palette.button.primary,
      boxShadow: '0 0px 0px 0 rgb(0 171 85 / 24%) !important'
    }
  },
  boxOuter: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column'
    }
  },
  leftBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    paddingRight: 15,
    [theme.breakpoints.down('md')]: {
      paddingRight: 0,
      width: '100%'
    }
  },
  rightBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    paddingLeft: 15,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
      width: '100%',
      marginTop: 20
    }
  },
  fileLable: {
    fontFamily: 'Proxima Nova',
    fontWeight: 600,
    fontSize: '14px',
    color: theme.palette.order.completed,
    cursor: 'pointer',
    marginTop: 5,
    display: 'block'
  },
  fileInput: {
    display: 'none'
  },
  buttonOuter: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%'
  }
}));

// ----------------------------------------------------------------------
const AddNewMerchant = ({ closePopUp, ...props }) => {
  const classes = useStyles();
  const {
    data,
    data: { merchantData }
  } = props;

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
      <Box sx={{ mb: 5 }} />
      <Formik
        initialValues={{
          name: merchantData && merchantData.name ? merchantData.name : '',
          redemptionLInkKey: '',
          wooCommerceId: '',
          category: '',
          minimumPrice:
            merchantData && merchantData.amount ? merchantData.amount : '',
          storeLocation: '',
          sureAidDiscountMargin: '',
          redemptionDetails: '',
          storePictures: '',
          description:
            merchantData && merchantData.description
              ? merchantData.description
              : ''
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
            <Box className={classes.boxOuter}>
              <Box className={classes.leftBox}>
                <label className={classes.label}> Name</label>
                <TextField
                  fullWidth
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  name="name"
                  placeholder=""
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                  InputProps={{
                    className: classes.input
                  }}
                />
              </Box>
              <Box className={classes.rightBox}>
                <label className={classes.label}> Redemption LInk Key</label>
                <TextField
                  fullWidth
                  type="text"
                  name="redemptionLInkKey"
                  placeholder=""
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                  InputProps={{
                    className: classes.input
                  }}
                />
              </Box>
            </Box>
            <Box className={classes.topMargin} />

            <Box className={classes.boxOuter}>
              <Box className={classes.leftBox}>
                <label className={classes.label}> Woo Commerce ID</label>
                <TextField
                  fullWidth
                  type="text"
                  name="wooCommerceId"
                  placeholder=""
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                  InputProps={{
                    className: classes.input
                  }}
                />
              </Box>
              <Box className={classes.rightBox}>
                <label className={classes.label}> Category</label>
                <TextField
                  fullWidth
                  type="text"
                  name="category"
                  placeholder=""
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                  InputProps={{
                    className: classes.input
                  }}
                />
              </Box>
            </Box>
            <Box className={classes.topMargin} />

            <Box className={classes.boxOuter}>
              <Box className={classes.leftBox}>
                <label className={classes.label}> Minimum Price</label>
                <TextField
                  fullWidth
                  type="text"
                  name="minimumPrice"
                  value={values.minimumPrice}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder=""
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                  InputProps={{
                    className: classes.input
                  }}
                />
              </Box>
              <Box className={classes.rightBox}>
                <label className={classes.label}> Store Location</label>
                <TextField
                  fullWidth
                  type="text"
                  name="storeLocation"
                  placeholder=""
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                  InputProps={{
                    className: classes.input
                  }}
                />
              </Box>
            </Box>
            <Box className={classes.topMargin} />

            <Box className={classes.boxOuter}>
              <Box className={classes.leftBox}>
                <label className={classes.label}>
                  {' '}
                  SureAid Discount Margin
                </label>
                <TextField
                  fullWidth
                  type="text"
                  name="sureAidDiscountMargin"
                  placeholder=""
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                  InputProps={{
                    className: classes.input
                  }}
                />
              </Box>
              <Box className={classes.rightBox}>
                <label className={classes.label}> Redemption Details</label>
                <TextField
                  fullWidth
                  type="text"
                  name="redemptionDetails"
                  placeholder=""
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                  InputProps={{
                    className: classes.input
                  }}
                />
              </Box>
            </Box>
            <Box className={classes.topMargin} />

            <Box className={classes.boxOuter}>
              <Box className={classes.leftBox}>
                <label className={classes.label}> Store Pictures</label>
                <TextField
                  fullWidth
                  type="text"
                  name="storePictures"
                  placeholder=""
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                  InputProps={{
                    className: classes.input
                  }}
                />
                <Box>
                  <TextField
                    accept="image/*"
                    className={classes.fileInput}
                    id="raised-button-file"
                    multiple
                    type="file"
                  />
                  <label
                    htmlFor="raised-button-file"
                    className={classes.fileLable}
                  >
                    {' '}
                    + Choose File
                  </label>
                </Box>
              </Box>
              <Box className={classes.rightBox}>
                <label className={classes.label}> Description</label>
                <TextareaAutosize
                  aria-label="maximum height"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder=""
                  className={clsx(classes.textField, classes.descriptionInput)}
                />
              </Box>
            </Box>
            <Box sx={{ mb: 4 }} />
            <Box className={classes.buttonOuter}>
              <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                className={classes.button}
                onClick={handleSubmit}
              >
                {' '}
                {merchantData && merchantData.id
                  ? 'Edit Merchants'
                  : 'Add Merchants'}{' '}
              </LoadingButton>
            </Box>
          </form>
        )}
      </Formik>
    </Grid>
  );
};

export default AddNewMerchant;

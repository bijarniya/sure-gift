import React, { useEffect } from 'react';
import {
  makeStyles,
  Grid,
  TextField,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  Select,
  MenuItem,
  FormHelperText
} from '@material-ui/core';
import Icons from 'src/components/Icons';
import { Formik } from 'formik';
import ButtonLoading from 'src/components/Common/ButtonLoading';
import * as Yup from 'yup';
import { apiMessage, validationMessage } from 'src/constants/message';
import { getSuccess, getError } from 'src/redux/slices/error';
import {
  addEvent,
  editEvent,
  getEventRepeatTypes,
  getEventReminderTypes
} from 'src/redux/slices/events';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

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
  },
  descriptionInput: {
    background: 'none',
    fontFamily: theme.palette.font.fontFamily,
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 16,
    borderRadius: 12,
    height: '132px !important',
    color: theme.palette.text.primary,
    '&:focused': {
      border: '1px solid rgba(255, 255, 255, 0.3)'
    },
    '&::placeholder': {
      color: theme.palette.text.primary
    }
  },
  radioContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  },
  radioGSec: {
    '& .MuiFormControlLabel-label': {
      color: `${theme.palette.text.primary} !important`,
      fontFamily: `${theme.palette.font.fontFamily} !important`,
      fontSize: '14px !important',
      fontWeight: '400 !important'
    }
  },
  radioColor: {
    color: '#EAEDF0'
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
  helperText: {
    marginTop: 0,
    color: '#FF4842'
  }
}));

// ----------------------------------------------------------------------
const AddNewEvent = ({ closePopUp, onRemove, ...props }) => {
  const classes = useStyles();
  const {
    data,
    data: { eventData }
  } = props;
  const dispatch = useDispatch();
  const { repeatTypes, reminderTypes } = useSelector((state) => state.events);

  useEffect(() => {
    dispatch(getEventRepeatTypes());
    dispatch(getEventReminderTypes());
  }, [dispatch]);

  const eventSchema = Yup.object().shape({
    title: Yup.string().required(validationMessage.title),
    startDate: Yup.string()
      .required(validationMessage.startDate)
      .test(
        'startDate',
        `Start Date must be greater than or equal to ${moment().format(
          'DD/MM/yyyy'
        )} `,
        (value) =>
          moment(value).diff(moment(new Date()), 'days') >= 0 ? true : false
      ),
    description: Yup.string().required(validationMessage.description),
    repeatType: Yup.string().required(validationMessage.repeatType)
  });

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
        enableReinitialize
        initialValues={{
          title: '',
          startDate: moment().format('DD/MM/yyyy'),
          repeatType:
            (repeatTypes && repeatTypes.length > 0 && repeatTypes[0].id) || '',
          reminderType: '1',
          description: '',
          contactId: 16
        }}
        validationSchema={eventSchema}
        onSubmit={async (values) => {
          try {
            if (eventData && eventData.id) {
              values.eventId = eventData.id;
              await dispatch(editEvent(values));
              dispatch(getSuccess(apiMessage.eventUpdated));
              onRemove();
              closePopUp();
            } else {
              await dispatch(addEvent(values));
              dispatch(getSuccess(apiMessage.eventAdded));
              onRemove();
              closePopUp();
            }
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
            <Grid className={classes.fullContainer}>
              <label className={classes.labelText}>Title</label>
              <TextField
                fullWidth
                type="text"
                placeholder="Enter event title"
                {...getFieldProps('title')}
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
                FormHelperTextProps={{
                  classes: { root: classes.helperText }
                }}
                error={Boolean(touched.title && errors.title)}
                helperText={touched.title && errors.title && errors.title}
              />
            </Grid>

            <Grid className={classes.mainContainer}>
              <Box className={classes.leftBox}>
                <label className={classes.labelText}>Start</label>
                <TextField
                  fullWidth
                  id="date"
                  type="date"
                  placeholder="Enter start date"
                  format="DD.MM.yyyy"
                  {...getFieldProps('startDate')}
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
                  error={Boolean(touched.startDate && errors.startDate)}
                  helperText={
                    touched.startDate && errors.startDate && errors.startDate
                  }
                />
              </Box>
              <Box className={classes.rightBox}>
                <label className={classes.labelText}></label>
                <Select
                  variant="outlined"
                  {...getFieldProps('repeatType')}
                  defaultValue=""
                  className={classes.selectBox}
                  inputProps={{
                    classes: {
                      root: classes.selectBox,
                      icon: classes.iconSelect
                    }
                  }}
                >
                  {repeatTypes &&
                    repeatTypes.length > 0 &&
                    repeatTypes.map((v, index) => {
                      return (
                        <MenuItem key={index} value={v.id}>
                          {v.name}
                        </MenuItem>
                      );
                    })}
                </Select>
                {touched && touched.repeatType && errors.repeatType && (
                  <FormHelperText className={classes.helperText}>
                    {errors.repeatType}
                  </FormHelperText>
                )}
              </Box>
            </Grid>

            <Grid className={classes.fullContainer}>
              <label className={classes.labelText}>Start</label>
              <Grid className={classes.radioContainer}>
                <RadioGroup
                  row
                  aria-label="reminderType"
                  {...getFieldProps('reminderType')}
                  className={classes.radioGSec}
                  formhelpertextprops={{
                    classes: { root: classes.helperText }
                  }}
                  onChange={handleChange}
                >
                  {reminderTypes &&
                    reminderTypes.length > 0 &&
                    reminderTypes.map((v, index) => {
                      return (
                        <FormControlLabel
                          key={index}
                          value={v.id.toString()}
                          control={<Radio className={classes.radioColor} />}
                          label={
                            v.id === 2
                              ? 'A day Before'
                              : v.id === 3
                              ? 'A Week Before'
                              : 'Same Day'
                          }
                        />
                      );
                    })}
                </RadioGroup>
              </Grid>
            </Grid>

            <Grid className={classes.fullContainer}>
              <label className={classes.labelText}>Description</label>
              <TextField
                fullWidth
                multiline
                aria-label="description"
                rows={3}
                {...getFieldProps('description')}
                className={classes.descriptionInput}
                FormHelperTextProps={{
                  classes: { root: classes.helperText }
                }}
                error={Boolean(touched.description && errors.description)}
                helperText={
                  touched.description &&
                  errors.description &&
                  errors.description
                }
              />
            </Grid>
            <Box className={classes.buttonBox}>
              <ButtonLoading
                title={'save'}
                handleClick={handleSubmit}
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

export default AddNewEvent;

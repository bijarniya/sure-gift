import React, { useState } from 'react';
import { makeStyles, Grid, TextField, Box } from '@material-ui/core';
import Icons from 'src/components/Icons';
import { LoadingButton } from '@material-ui/lab';

// ----------------------------------------------------------------------

const orderType = [
  {
    id: 1,
    value: 'Select store'
  },
  {
    id: 2,
    value: 'Jumia'
  }
];

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
    width: '94%'
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
  topMargin: {
    marginTop: 20
  },
  button: {
    backgroundColor: theme.palette.button.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    borderRadius: 18,
    fontSize: 14,
    color: theme.palette.text.dark,
    padding: '25px 0px 25px 0px',
    boxShadow: '0 0px 0px 0 rgb(0 171 85 / 24%) !important',
    '&:hover': {
      backgroundColor: theme.palette.button.primary,
      boxShadow: '0 0px 0px 0 rgb(0 171 85 / 24%) !important'
    }
  },
  slectBoxOne: {
    marginTop: 10,
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: '18px',
    '& .MuiSelect-icon': {
      color: `${theme.palette.text.primary} !important`
    }
  },
  optionSec: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: '16px'
  }
}));

// ----------------------------------------------------------------------
const ActivateVoucherPopup = ({ closePopUp, onRemove, ...props }) => {
  const classes = useStyles();
  const { data } = props;
  const [orderStatus, setOrderStatus] = useState('Select Debit Type');

  const handleOrderStatus = (e) => {
    setOrderStatus(e.target.value);
  };

  const onSubmit = () => {
    closePopUp();
  };

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
      <Box>
        <label className={classes.label}> Voucher Code</label>
        <TextField
          fullWidth
          type="text"
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
          InputProps={{
            className: classes.input
          }}
        />
      </Box>
      <Box sx={{ mb: 2 }} />
      <Box>
        <label className={classes.label}> Amount</label>
        <TextField
          fullWidth
          type="text"
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
          InputProps={{
            className: classes.input
          }}
        />
      </Box>
      <Box sx={{ mb: 2 }} />
      <Box>
        <label className={classes.label}> Phone Number</label>
        <TextField
          fullWidth
          type="text"
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
          InputProps={{
            className: classes.input
          }}
        />
      </Box>
      <Box sx={{ mb: 2 }} />
      <Box>
        <label className={classes.label}> Store</label>
        <TextField
          select
          fullWidth
          //variant="standard"
          value={orderStatus}
          onChange={handleOrderStatus}
          SelectProps={{ native: true }}
          InputProps={{
            classes: {
              root: classes.slectBoxOne
            }
          }}
        >
          {orderType.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className={classes.optionSec}
            >
              {option.value}
            </option>
          ))}
        </TextField>
      </Box>
      <Box sx={{ mb: 4 }} />
      <Box>
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          className={classes.button}
          onClick={onSubmit}
        >
          Redeem
        </LoadingButton>
      </Box>
    </Grid>
  );
};

export default ActivateVoucherPopup;

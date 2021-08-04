import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Box,
  TextField,
  Select,
  MenuItem
} from '@material-ui/core';
import Icons from 'src/components/Icons';

// --------------------------------------
const surchargeOptions = ['Package'];

// ----------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '69%',
    paddingRight: 40,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: '100%',
      paddingRight: 0
    }
  },
  heading: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 700,
    fontSize: 20,
    marginTop: 52,
    marginBottom: 10
  },
  hmTitle: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontWeight: 400,
    fontSize: 20
  },
  topBox: {
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: theme.palette.background.secondary,
    marginTop: 30
  },
  iconOuter: {
    height: 60,
    width: 110,
    margin: '20px 25px 20px 25px',
    backgroundColor: theme.palette.text.primary,
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  labelText: {
    fontFamily: theme.palette.font.fontFamily,
    color: theme.palette.text.primary,
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 10,
    display: 'block'
  },
  textField: {},
  input: {
    border: '1px solid rgba(255, 255, 255, 0.3)',
    fontFamily: theme.palette.font.fontFamily,
    color: theme.palette.text.primary,
    fontWeight: 600,
    fontSize: 16,
    borderRadius: 12,
    height: 50
  },
  helperText: {
    marginTop: 0
  },
  containerInner: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginTop: 30
  },
  leftBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    paddingRight: 20
  },
  rightBox: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 20,
    width: '50%'
  },
  emailOuter: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 30
  },
  iconSelect: {
    fill: theme.palette.text.primary
  },
  slectBox: {
    width: '100%',
    fontFamily: theme.palette.font.fontFamily,
    color: theme.palette.text.primary,
    fontSize: 16,
    fontWeight: 600,
    '& .MuiSelect-icon': {
      color: `${theme.palette.text.primary} !important`
    }
  },
  outlined: {
    border: '1px solid rgba(255, 255, 255, 0.3) !important'
  }
}));

function SummaryDetails() {
  const classes = useStyles();
  const [state, setState] = useState({
    customerNo: '',
    phone: '',
    package: surchargeOptions[0],
    surcharge: '',
    amount: ''
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Grid className={classes.root}>
      <Grid className={classes.topBox}>
        <Box className={classes.iconOuter}>
          <Icons url={'hm'} />
        </Box>
        <Typography className={classes.hmTitle}>H&M</Typography>
      </Grid>
      <Typography className={classes.heading}>Direct Top-up</Typography>
      <Grid className={classes.containerInner}>
        <Box className={classes.leftBox}>
          <label className={classes.labelText}>Customer No</label>
          <TextField
            fullWidth
            type="text"
            name="customerNo"
            value={state.customerNo}
            placeholder="Enter customer no"
            onChange={handleChange}
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
          <label className={classes.labelText}>Phone No</label>
          <TextField
            fullWidth
            type="text"
            name="phone"
            value={state.phone}
            placeholder="Enter phone no"
            onChange={handleChange}
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            InputProps={{
              className: classes.input
            }}
          />
        </Box>
      </Grid>
      <Grid className={classes.emailOuter}>
        <label className={classes.labelText}>Select Package</label>
        <Select
          variant="outlined"
          id="package"
          value={state.package}
          name="package"
          onChange={handleChange}
          defaultValue={state.package}
          className={classes.slectBox}
          inputProps={{
            classes: {
              root: classes.slectBox,
              icon: classes.iconSelect,
              outlined: classes.outlined
            }
          }}
        >
          {surchargeOptions &&
            surchargeOptions.length > 0 &&
            surchargeOptions.map((ff, index) => {
              return (
                <MenuItem key={index} value={ff}>
                  {ff}
                </MenuItem>
              );
            })}
        </Select>
      </Grid>
      <Grid className={classes.containerInner}>
        <Box className={classes.leftBox}>
          <label className={classes.labelText}>Surcharge</label>
          <TextField
            fullWidth
            type="text"
            name="surcharge"
            value={state.surcharge}
            placeholder="Enter surcharge"
            onChange={handleChange}
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
          <label className={classes.labelText}>Amount No</label>
          <TextField
            fullWidth
            type="text"
            name="amount"
            value={state.amount}
            placeholder="Enter amount no"
            onChange={handleChange}
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            InputProps={{
              className: classes.input
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
export default SummaryDetails;

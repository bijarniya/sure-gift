import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import Icons from 'src/components/Icons';
import ImagesConfig from 'src/layouts/Common/Images';
import { useHistory } from 'react-router-dom';
import { PATH_ACCOUNT } from 'src/routes/paths';
import clsx from 'clsx';
import CheckVoucherFilters from './CheckVoucherFilters';

// --------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  leftBox: {
    display: 'flex',
    marginLeft: '-30.5px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    }
  },
  buttonSec: {
    background: theme.palette.background.activeMenu,
    borderRadius: 14,
    width: 50,
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'none',
    '&:hover': {
      background: theme.palette.background.activeMenu,
      boxShadow: 'none'
    }
  },
  iconSec: {
    width: 30,
    height: 30
  },
  imgBox: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'baseline',
    width: '100%',
    height: 140,
    backgroundRepeat: 'no-repeat',
    marginTop: 15,
    marginLeft: 25
  },
  imgIcon: {
    marginTop: '18.4px',
    marginRight: '70.5px',
    [theme.breakpoints.down('sm')]: {
      marginRight: '45.5px'
    }
  },
  rightBox: {
    display: 'flex',
    paddingTop: 25,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 15
    }
  },
  heading: {
    color: theme.palette.text.gray,
    fontFamily: theme.palette.font.fontFamily,
    fontWeight: 400,
    fontSize: 14,
    [theme.breakpoints.down('sm')]: {
      fontSize: 12
    }
  },
  value: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.fontFamily,
    fontWeight: 400,
    fontSize: 18,
    [theme.breakpoints.down('sm')]: {
      fontSize: 13
    }
  },
  mt: {
    marginTop: 30
  },
  actionSec: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'flex-end'
  }
}));

function CheckVoucherTop() {
  const classes = useStyles();
  const history = useHistory();

  const handleButton = () => {
    history.push(PATH_ACCOUNT.voucherServices);
  };

  return (
    <Grid container>
      <Grid item xs={12} className={classes.root}>
        <Grid item xs={12} md={5} className={classes.leftBox}>
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            className={classes.buttonSec}
            onClick={handleButton}
          >
            <Icons url={'leftArroWhite'} className={classes.iconSec} />
          </LoadingButton>
          <Box
            style={{ backgroundImage: `url(${ImagesConfig.full97})` }}
            className={classes.imgBox}
          >
            <Icons url={'amazonIcon'} className={classes.imgIcon} />
          </Box>
        </Grid>
        <Grid item xs={12} md={7} className={classes.rightBox}>
          <Grid item xs={5}>
            <Typography className={classes.heading}>Voucher code</Typography>
            <Typography className={classes.value}>4231235123123123</Typography>
            <Typography className={clsx(classes.heading, classes.mt)}>
              Starting Balance
            </Typography>
            <Typography className={classes.value}>N 20,000</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography className={classes.heading}>Expire date</Typography>
            <Typography className={classes.value}>01.01.2021</Typography>
            <Typography className={clsx(classes.heading, classes.mt)}>
              Current Balance
            </Typography>
            <Typography className={classes.value}>N 20,000</Typography>
          </Grid>
          <Grid item xs={3} className={classes.actionSec}>
            <CheckVoucherFilters />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default CheckVoucherTop;

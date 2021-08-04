import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
import Search from 'src/components/Common/Search';
import ButtonLoading from 'src/components/Common/ButtonLoading';
import { useDialogBox } from 'src/components/popup/common/useDialogBox';
import OpenDialog from 'src/components/popup/common/OpenDialog';

// ---------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  leftBox: {
    display: 'flex',
    flexDirection: 'row',
    width: '48%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  rightBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '52%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginTop: 20
    }
  },
  heading: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    fontSize: 24,
    fontWeight: 700,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16
    }
  },
  searchBox: {
    width: '65%'
  },
  buttonOuter: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.palette.text.primary,
    borderRadius: 18,
    padding: 0,
    width: 160,
    height: 60,
    marginLeft: 10
  },
  buttonInner: {
    backgroundColor: theme.palette.text.primary,
    border: `0px solid ${theme.palette.text.primary}`,
    color: theme.palette.text.dark,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 14,
    fontWeight: 400,
    borderRadius: 18,
    margin: 0,
    height: 60,
    padding: '0px 0px',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: theme.palette.text.primary,
      boxShadow: 'none',
      borderRadius: 18
    },
    [theme.breakpoints.down('md')]: {
      padding: '0px 0px'
    }
  },
  addNewEventSec: {
    width: '550px',
    minHeight: '400px',
    background: 'rgba(0, 0, 0, 0.8)',
    borderRadius: '35px',
    border: `1px ${theme.palette.text.primary} solid`
  }
}));

// ----------------------------------------------------------------------
function MyVouchersTop() {
  const classes = useStyles();

  // popup start
  const { dialogBoxName, openDialogBox, closeDialogBox } = useDialogBox();
  const [selectedData, setData] = useState();
  // popup list data
  const popupList = [
    {
      title: 'Add a New Voucher',
      Description: 'Add a New Voucher',
      popup: 'addNewVoucher'
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

  const handleButton = () => {
    openPopup('addNewVoucher');
  };

  return (
    <Grid container>
      <Grid item xs={12} className={classes.root}>
        <Grid className={classes.container}>
          <Box className={classes.leftBox}>
            <Typography className={classes.heading}>My Vouchers</Typography>
          </Box>
          <Box className={classes.rightBox}>
            <Box className={classes.searchBox}>
              <Search searchItem={'Search Merchant'} />
            </Box>
            <ButtonLoading
              title={'Add Voucher'}
              container={classes.buttonOuter}
              buttonClass={classes.buttonInner}
              handleClick={handleButton}
            />
          </Box>
        </Grid>
        {!!dialogBoxName && (
          <OpenDialog
            componentName={dialogBoxName}
            open={true}
            closeBox={closeDialogBox}
            data={selectedData}
            onRemove={() => confirmRemove()}
            containerStyle={classes.addNewEventSec}
            center={true}
          />
        )}
      </Grid>
    </Grid>
  );
}

export default MyVouchersTop;

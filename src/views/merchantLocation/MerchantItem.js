import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
import Icons from 'src/components/Icons';
import { useDialogBox } from 'src/components/popup/common/useDialogBox';
import OpenDialog from 'src/components/popup/common/OpenDialog';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 344,
    width: 285,
    padding: '25px 15px 15px 15px',
    marginBottom: 15,
    background:
      'linear-gradient(191.34deg, rgba(255, 254, 251, 0.025) 8.56%, rgba(255, 254, 251, 0) 85.73%)',
    backdropFilter: 'blur(64.0164px)',
    borderRadius: 25,
    border: `1px solid ${theme.palette.border.grayWhite}`,
    [theme.breakpoints.down('md')]: {
      marginBottom: 15,
      width: 285
    }
  },
  topBox: {
    paddingLeft: 10,
    width: '100%'
  },
  topBoxInner: {
    display: 'flex',
    flexDirection: 'row'
  },
  iconOuter: {
    width: 60,
    height: 60,
    backgroundColor: theme.palette.text.primary,
    borderRadius: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
  },
  infoOuter: {
    paddingLeft: 15,
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 20,
    fontWeight: 700
  },
  location: {
    color: theme.palette.text.gray,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 14,
    fontWeight: 400,
    marginTop: 5
  },
  addressOuter: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 30
  },
  addressHeading: {
    color: theme.palette.text.gray,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 12,
    fontWeight: 400,
    textTransform: 'uppercase'
  },
  address: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 14,
    fontWeight: 400,
    marginTop: 6
  },
  contact: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20
  },
  buttonOuter: {
    marginTop: 30,
    width: 255,
    borderRadius: 16,
    background: 'rgba(255, 255, 255, 0.05)',
    height: 50,
    display: 'flex',
    padding: 0,
    cursor: 'pointer'
  },
  dropDownOuter: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '0px 25px 0px 25px',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  catInfo: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    width: '91%'
  },
  iconClass: {
    width: 24,
    height: 24
  },
  quickOrder: {
    width: '680px',
    minHeight: '500px',
    background: '#000000',
    backdropFilter: 'blur(40px)',
    borderRadius: 30,
    border: `1px solid ${theme.palette.border.grayWhite}`
  }
}));

const MerchantItem = ({ item }) => {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);

  const handleOpen = (status) => {
    setOpen(status);
  };

  // popup start
  const { dialogBoxName, openDialogBox, closeDialogBox } = useDialogBox();
  const [selectedData, setData] = useState();
  // popup list data
  const popupList = [
    {
      title: 'Merchant Location',
      Description: 'Merchant Location',
      popup: 'merchantLocationPopup'
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

  const confirmRemove = () => {
    handleOpen(false);
  };
  // popup end

  return (
    <Grid className={classes.root}>
      <Grid className={classes.topBox}>
        <Grid className={classes.topBoxInner}>
          <Box className={classes.iconOuter}>
            <Icons url={'hmShort'} />
          </Box>
          <Box className={classes.infoOuter}>
            <Typography className={classes.title}> {item.name}</Typography>
            <Typography className={classes.location}>
              {item.location}
            </Typography>
          </Box>
        </Grid>
        <Grid className={classes.addressOuter}>
          <Typography className={classes.addressHeading}> Address</Typography>
          <Typography className={classes.address}>{item.address}</Typography>
        </Grid>
        <Grid className={classes.contact}>
          <Typography className={classes.addressHeading}> Contact</Typography>
          <Typography className={classes.address}>{item.email}</Typography>
        </Grid>
      </Grid>
      {item && item.status ? (
        <Box onClick={() => handleOpen(true)} className={classes.buttonOuter}>
          <Box
            className={classes.dropDownOuter}
            onClick={() => openPopup('merchantLocationPopup')}
          >
            <Typography className={classes.catInfo}>More Locations</Typography>
            <Icons
              url={isOpen ? 'upArrowN' : 'downArrow'}
              className={classes.iconClass}
            />
          </Box>
        </Box>
      ) : null}
      {!!dialogBoxName && (
        <OpenDialog
          componentName={dialogBoxName}
          open={true}
          closeBox={closeDialogBox}
          data={selectedData}
          onRemove={confirmRemove}
          containerStyle={classes.quickOrder}
          center={true}
        />
      )}
    </Grid>
  );
};
export default MerchantItem;

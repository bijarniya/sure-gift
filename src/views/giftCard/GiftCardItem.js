import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import Icons from 'src/components/Icons';
import ImagesConfig from 'src/layouts/Common/Images';
import ButtonLoading from 'src/components/Common/ButtonLoading';
import { useDialogBox } from 'src/components/popup/common/useDialogBox';
import OpenDialog from 'src/components/popup/common/OpenDialog';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundImage: `url(${ImagesConfig.giftCard})`,
    backgroundRepeat: 'no-repeat',
    minHeight: 345,
    width: 280,
    padding: '25px 30px 35px 30px',
    marginBottom: 42,
    [theme.breakpoints.down('md')]: {
      marginRight: 20
    }
  },
  buttonOuter: {
    display: 'flex',
    flexDirection: 'row',
    background: `conic-gradient(${theme.palette.background.conic})`,
    borderRadius: 8,
    padding: 1,
    width: 93,
    boxShadow: '0px 8px 24px rgba(161, 146, 245, 0.3)',
    [theme.breakpoints.down('md')]: {
      width: 93
    }
  },
  buttonInner: {
    background: `conic-gradient(${theme.palette.background.conic})`,
    border: `2px solid ${theme.palette.text.dark}`,
    color: theme.palette.text.dark,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 10,
    boxShadow: 'none',
    borderRadius: 8,
    fontWeight: 600,
    margin: 1,
    padding: '17px 14px 17px 14px',
    '&:hover': {
      backgroundColor: theme.palette.text.dark,
      color: theme.palette.text.dark,
      boxShadow: 'none',
      borderRadius: 8
    },
    [theme.breakpoints.down('md')]: {
      padding: '0px 0px'
    }
  },
  productInfo: {
    display: 'flex',
    flexDirection: 'row',
    backgroundImage: `url(${ImagesConfig.giftCardtImage})`,
    backgroundRepeat: 'no-repeat',
    marginTop: 54,
    width: '100%',
    height: 140,
    padding: '15px 18px 0px 17px',
    [theme.breakpoints.down('md')]: {
      marginRight: 0
    }
  },
  titleSec: {
    color: theme.palette.text.primary,
    width: '70%',
    fontWeight: 700,
    fontSize: 13
  },
  amazonIcon: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '30%',
    marginTop: '6px'
  },
  bottomContainer: {
    fontFamily: theme.palette.font.secondaryFontFamily,
    color: theme.palette.text.primary,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 16,
    fontWeight: 400,
    marginTop: 25,
    [theme.breakpoints.down('md')]: {}
  },
  quickOrder: {
    width: '910px',
    minHeight: '300px',
    background: 'rgba(0, 0, 0, 0.8)',
    borderRadius: '35px',
    border: `1px ${theme.palette.text.primary} solid`
  }
}));

const GiftCard = ({ name }) => {
  const classes = useStyles();
  // popup start
  const { dialogBoxName, openDialogBox, closeDialogBox } = useDialogBox();
  const [selectedData, setData] = useState();
  // popup list data
  const popupList = [
    {
      title: 'Edit Merchant',
      Description: 'Edit Merchant',
      popup: 'quickOrderPopup'
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
    openPopup('quickOrderPopup');
  };

  return (
    <Grid className={classes.root}>
      <ButtonLoading
        title={'Road Chef'}
        handleClick={handleButton}
        container={classes.buttonOuter}
        buttonClass={classes.buttonInner}
      />
      <Box className={classes.productInfo}>
        <Box className={classes.titleSec}>John Smith</Box>
        <Box className={classes.amazonIcon}>
          <Icons url={'amazon'} height={10} width={32} />
        </Box>
      </Box>
      <Box className={classes.bottomContainer}> {name} </Box>
      {!!dialogBoxName && (
        <OpenDialog
          componentName={dialogBoxName}
          open={true}
          closeBox={closeDialogBox}
          data={selectedData}
          onRemove={() => confirmRemove()}
          containerStyle={classes.quickOrder}
          center={true}
        />
      )}
    </Grid>
  );
};
export default GiftCard;

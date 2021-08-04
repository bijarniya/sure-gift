import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import ButtonLoading from 'src/components/Common/ButtonLoading';
import { useDialogBox } from 'src/components/popup/common/useDialogBox';
import OpenDialog from 'src/components/popup/common/OpenDialog';

// -------------------------------------------------
const useStyles = makeStyles((theme) => ({
  buttonBox: {
    marginLeft: 10
  },
  quickOrder: {
    width: 550,
    borderRadius: 35,
    margin: 'auto',
    background: 'rgba(0, 0, 0, 0.8)'
  }
}));

// -------------------------------------------------
function SignIn() {
  const classes = useStyles();

  // popup start
  const { dialogBoxName, openDialogBox, closeDialogBox } = useDialogBox();
  const [selectedData, setData] = useState();
  // popup list data
  const popupList = [
    {
      title: 'Sign In',
      Description: 'Sign In',
      popup: 'signInPopup'
    },
    {
      title: 'Sign Up',
      Description: 'Sign Up',
      popup: 'signUpPopup'
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

  const confirmRemove = (type) => {
    openPopup(type);
  };
  // popup end

  return (
    <Box className={classes.buttonBox}>
      <ButtonLoading
        title={'Sign in'}
        handleClick={() => openPopup('signInPopup')}
      />
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
    </Box>
  );
}

export default SignIn;

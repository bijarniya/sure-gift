import React, { useEffect, useState } from 'react';
import { makeStyles, Dialog } from '@material-ui/core';
import QuickOrderPopup from 'src/components/popup/QuickOrderPopup';
import SuccessfullPopup from 'src/components/popup/SuccessfullPopup';
import PaymentFailedPopup from 'src/components/popup/PaymentFailedPopup';
import StepOnePopup from 'src/components/popup/ContactUs/StepOnePopup';
import BrandPopup from 'src/components/popup/BrandPopup';
import MerchantLocationPopup from 'src/components/popup/MerchantLocationPopup';
import SignInPopup from 'src/components/popup/User/SignInPopup';
import SignUpPopup from 'src/components/popup/User/SignUpPopup';
import AddNewEvent from 'src/components/popup/AddNewEvent';
import AddNewVoucher from 'src/components/popup/AddNewVoucher';
import EventNotification from 'src/components/popup/EventNotification';
import BankDepositPopup from 'src/components/popup/BankDepositPopup';
import PaypalPopup from 'src/components/popup/PaypalPopup';
import PaymentSuccessfulPopup from 'src/components/popup/PaymentSuccessfulPopup';
import VoucherSendPopup from 'src/components/popup/VoucherSendPopup';
import MergeFailedPopup from 'src/components/popup/MergeFailedPopup';

//---------------------------------------------
const useStyles = makeStyles((theme) => ({
  dialogRoot: {
    maxWidth: 'calc(60% - 125px)',
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    marginLeft: 'calc(30% + 42px)',
    width: '100%',
    [theme.breakpoints.down('xl')]: {
      maxWidth: 'calc(100% - 10px)'
    }
  },
  scrollPaper: {
    justifyContent: 'flex-start'
  },
  centerModel: {
    margin: 'auto'
  }
}));

const OpenDialog = ({ componentName, closeBox, open, center, ...props }) => {
  const classes = useStyles();
  const [openPopup, setOpen] = useState(false);

  useEffect(() => {
    setOpen(open);
    return () => setOpen(false);
  }, [open]);

  const handleClose = () => {
    closeBox();
  };

  return (
    <Dialog
      open={openPopup}
      onClose={() => handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      classes={{
        paper: [
          classes.dialogRoot,
          center && classes.centerModel,
          props.containerStyle && props.containerStyle
        ].join(' '),
        scrollPaper: classes.scrollPaper
      }}
    >
      {
        {
          quickOrderPopup: <QuickOrderPopup closePopUp={closeBox} {...props} />,
          successfullPopup: (
            <SuccessfullPopup closePopUp={closeBox} {...props} />
          ),
          paymentFailedPopup: (
            <PaymentFailedPopup closePopUp={closeBox} {...props} />
          ),
          stepOnePopup: <StepOnePopup closePopUp={closeBox} {...props} />,
          brandPopup: <BrandPopup closePopUp={closeBox} {...props} />,
          merchantLocationPopup: (
            <MerchantLocationPopup closePopUp={closeBox} {...props} />
          ),
          signInPopup: <SignInPopup closePopUp={closeBox} {...props} />,
          signUpPopup: <SignUpPopup closePopUp={closeBox} {...props} />,
          addNewEvent: <AddNewEvent closePopUp={closeBox} {...props} />,
          addNewVoucher: <AddNewVoucher closePopUp={closeBox} {...props} />,
          eventNotification: (
            <EventNotification closePopUp={closeBox} {...props} />
          ),
          bankDepositPopup: (
            <BankDepositPopup closePopUp={closeBox} {...props} />
          ),
          paypalPopup: <PaypalPopup closePopUp={closeBox} {...props} />,
          paymentSuccessfulPopup: (
            <PaymentSuccessfulPopup closePopUp={closeBox} {...props} />
          ),
          voucherSendPopup: (
            <VoucherSendPopup closePopUp={closeBox} {...props} />
          ),
          mergeFailedPopup: (
            <MergeFailedPopup closePopUp={closeBox} {...props} />
          )
        }[componentName]
      }
    </Dialog>
  );
};
export default OpenDialog;

import React from 'react';
import { Icon } from '@iconify/react';
import { useSnackbar } from 'notistack';
import closeFill from '@iconify-icons/eva/close-fill';
import { MIconButton } from 'src/theme';
import { reset } from 'src/redux/slices/error';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import CenterLoader from 'src/components/Common/CenterLoader';

// ----------------------------------------------------------------------
const ErrorAndSuccess = () => {
  const dispatch = useDispatch();
  const { type, message, errorAndSuccess, isLoading } = useSelector(
    (state) => state.errors
  );
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const successAndErroMessage = (eSType, eSMessage) => {
    if (eSMessage && eSMessage.length > 0) {
      _.map(eSMessage, function (v) {
        enqueueSnackbar(v, {
          variant: eSType,
          action: (key) => (
            <MIconButton size="small" onClick={() => closeSnackbar(key)}>
              <Icon icon={closeFill} />
            </MIconButton>
          )
        });
      });
    }
  };

  // ERROR AND SUCCESS
  if (errorAndSuccess) {
    setTimeout(() => {
      successAndErroMessage(type, message);
      dispatch(reset());
    }, 0);
  }

  return <>{isLoading && <CenterLoader />}</>;
};

export default ErrorAndSuccess;

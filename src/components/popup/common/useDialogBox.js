import { useState } from 'react';

export function useDialogBox() {
  const [dialogBoxName, setDialog] = useState('');
  const openDialogBox = componentName => setDialog(componentName);
  const closeDialogBox = () => setDialog('');
  return {
    dialogBoxName,
    openDialogBox,
    closeDialogBox,
  };
}

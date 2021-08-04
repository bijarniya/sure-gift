import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import clsx from 'clsx';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    cursor: 'pointer'
  }
}));

function ProfileAvatar({ avatar, avatarCls }) {
  const classes = useStyles();
  return (
    <Box
      component="img"
      alt="icon"
      src={avatar}
      className={clsx(classes.root, avatarCls)}
    />
  );
}

export default ProfileAvatar;

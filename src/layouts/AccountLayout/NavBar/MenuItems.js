import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MenuItem, ListItemText, Typography } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { NavLink as RouterLink } from 'react-router-dom';
import ChildMenu from './ChildMenu';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    textDecoration: 'none',
    paddingTop: '16.5px',
    paddingBottom: '16.5px',
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 18
  },
  linkTitle: {
    color: theme.palette.text.primary,
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 14,
    fontWeight: 400
  },
  isActiveParent: {
    background: 'rgba(255, 255, 255, 0.1)',
    boxShadow: 'inset 4px 0px 0px #92FBB3',
    backdropFilter: 'blur(54px)',
    borderRadius: 18
  }
}));

function MenuItems({ item }) {
  const classes = useStyles();
  const [open, setOpen] = useState(
    window.location.href.indexOf('/account/voucher/services') > -1
      ? true
      : false
  );

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <MenuItem
        to={item.linkTo}
        title={item.label}
        component={RouterLink}
        className={classes.root}
        activeClassName={classes.isActiveParent}
        onClick={handleClick}
      >
        <ListItemText>
          <Typography className={classes.linkTitle}>{item.label}</Typography>
        </ListItemText>
        {item &&
          item.items &&
          item.items.length > 0 &&
          (open ? <ExpandLess /> : <ExpandMore />)}
      </MenuItem>
      {item && item.items && item.items.length > 0 && (
        <ChildMenu
          childItem={item.items}
          open={open}
          handleChild={handleClick}
        />
      )}
    </>
  );
}

export default MenuItems;

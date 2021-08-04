import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  MenuItem,
  ListItemText,
  Typography,
  Collapse
} from '@material-ui/core';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import _ from 'lodash';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    textDecoration: 'none',
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 18
  },
  linkTitle: {
    color: 'rgba(255, 255, 255, 0.3)',
    fontFamily: theme.palette.font.secondaryFontFamily,
    fontSize: 14,
    fontWeight: 400
  },
  isActiveChild: {
    color: theme.palette.text.primary,
    fontWeight: 700
  }
}));

function ChildMenu({ childItem, open }) {
  const classes = useStyles();
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    (async function handleActiveItem() {
      if (childItem && childItem.length > 0) {
        let item = _.findIndex(childItem, {
          linkTo: window.location.pathname
        });
        if (item >= 0) {
          setActiveItem(item);
        }
      }
    })();
  }, [childItem]);

  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {childItem &&
          childItem.length > 0 &&
          childItem.map((item, index) => (
            <MenuItem
              key={index}
              to={item.linkTo}
              title={item.label}
              component={RouterLink}
              className={classes.root}
            >
              <ListItemText>
                <Typography
                  className={clsx(
                    classes.linkTitle,
                    activeItem === index && classes.isActiveChild
                  )}
                >
                  {item.label}
                </Typography>
              </ListItemText>
            </MenuItem>
          ))}
      </List>
    </Collapse>
  );
}

export default ChildMenu;

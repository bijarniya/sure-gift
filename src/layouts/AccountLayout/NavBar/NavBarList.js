import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Hidden, List } from '@material-ui/core';
import MenuList from './MenuList';
import MenuItems from './MenuItems';
import PopoverMenu from 'src/components/PopoverMenu';
import { Icon } from '@iconify/react';
import menu2Fill from '@iconify-icons/eva/menu-2-fill';
import { MIconButton } from 'src/theme';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20
  },
  mobileRoot: {
    padding: '0px 20px'
  }
}));

function NavBarList() {
  const classes = useStyles();
  const anchorRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);

  const renderNavBar = (
    <List>
      {MenuList &&
        MenuList.length > 0 &&
        MenuList.map((item, index) => <MenuItems item={item} key={index} />)}
    </List>
  );

  return (
    <Grid container>
      <Hidden mdDown>
        <Grid item xs={12} md={12} className={classes.root}>
          {renderNavBar}
        </Grid>
      </Hidden>

      <Hidden mdUp>
        <MIconButton ref={anchorRef} onClick={() => setOpenMenu(true)}>
          <Icon icon={menu2Fill} />
        </MIconButton>
        <PopoverMenu
          width={320}
          open={openMenu}
          anchorEl={anchorRef.current}
          onClose={() => setOpenMenu(false)}
        >
          <Grid item xs={12} md={12} className={classes.mobileRoot}>
            {renderNavBar}
          </Grid>
        </PopoverMenu>
      </Hidden>
    </Grid>
  );
}

export default NavBarList;

import React from 'react';
import { MIcon } from 'src/theme';
import { PATH_APP } from 'src/routes/paths';

// ----------------------------------------------------------------------

const path = (name) => `/static/icons/navbar/${name}.svg`;

const ICONS = {
  dashboard: <MIcon src={path('ic_dashboard')} />,
};

const navConfig = {
  // GENERAL
  // ----------------------------------------------------------------------
  primary: [{
    //subheader: 'general',
    items: [
      {
        title: 'dashboard',
        icon: ICONS.dashboard,
        href: PATH_APP.general.root,
      }
    ]
  }]
};

export default navConfig;

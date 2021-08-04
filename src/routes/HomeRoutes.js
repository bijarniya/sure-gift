import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import HomeLayout from 'src/layouts/HomeLayout';
import { PATH_HOME } from 'src/routes/paths';
import AuthProtect from 'src/components/Auth/AuthProtect';

// ----------------------------------------------------------------------
const HomeRoutes = {
  path: '*',
  layout: HomeLayout,
  routes: [
    {
      exact: true,
      path: PATH_HOME.home,
      component: lazy(() => import('src/views/home/LandingPageView'))
    },
    {
      exact: true,
      path: PATH_HOME.giftcard,
      component: lazy(() => import('src/views/giftCard'))
    },
    {
      exact: true,
      path: PATH_HOME.help,
      component: lazy(() => import('src/views/help'))
    },
    {
      exact: true,
      path: PATH_HOME.howToUse,
      component: lazy(() => import('src/views/howToUse'))
    },
    {
      guard: AuthProtect,
      exact: true,
      path: PATH_HOME.merchantSignUp,
      component: lazy(() => import('src/views/merchantSignUp'))
    },
    {
      exact: true,
      path: PATH_HOME.termsAndConditions,
      component: lazy(() => import('src/views/termsAndConditions'))
    },
    {
      exact: true,
      path: PATH_HOME.merchantLocation,
      component: lazy(() => import('src/views/merchantLocation'))
    },
    {
      exact: true,
      path: PATH_HOME.press,
      component: lazy(() => import('src/views/press'))
    },
    {
      exact: true,
      path: PATH_HOME.faq,
      component: lazy(() => import('src/views/faq'))
    },
    {
      exact: true,
      path: PATH_HOME.parWithSureGifts,
      component: lazy(() => import('src/views/parWithSureGifts'))
    },
    {
      exact: true,
      path: PATH_HOME.directTopUp,
      component: lazy(() => import('src/views/directTopUp'))
    },
    {
      exact: true,
      path: PATH_HOME.suregiftsBusiness,
      component: lazy(() => import('src/views/corporateSolutions'))
    },
    {
      component: () => <Redirect to="/404" />
    }
  ]
};

export default HomeRoutes;

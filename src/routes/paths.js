// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS = {
  auth: '/auth',
  app: '/app'
};

export const PATH_PAGE = {
  auth: {
    root: ROOTS.auth,
    login: path(ROOTS.auth, '/login'),
    loginUnprotected: path(ROOTS.auth, '/login-unprotected'),
    register: path(ROOTS.auth, '/register'),
    registerUnprotected: path(ROOTS.auth, '/register-unprotected'),
    resetPassword: path(ROOTS.auth, '/reset-password'),
    verify: path(ROOTS.auth, '/verify')
  },
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  pricing: '/pricing',
  payment: '/payment'
};

export const PATH_HOME = {
  home: '/',
  giftcard: '/giftcard',
  paybills: '/paybills',
  customizeStep1: '/customize/gift-card/step/1',
  customizeStep2: '/customize/gift-card/step/2',
  customizeStep3: '/customize/gift-card/step/3',
  help: '/help',
  howToUse: '/how/to/use',
  merchantSignUp: '/merchant/signup',
  faq: '/faq',
  termsAndConditions: '/terms/and/conditions',
  merchantLocation: '/merchant/location',
  press: '/press',
  parWithSureGifts: '/pay/bills',
  suregiftsBusiness: '/suregifts/business',
  directTopUp: '/direct/top/up',
  components: '/components'
};

export const PATH_ACCOUNT = {
  accountOverview: '/account/overview',
  contacts: '/account/contacts',
  myOrders: '/account/my/orders',
  recipientDetails: '/account/my/orders/:id',
  myVouchers: '/account/my/vouchers',
  contactsList: '/account/contacts/list/',
  wallet: '/account/wallet',
  accountSettings: '/account/settings',
  voucherServices: '/account/voucher/services',
  checkVoucherBlance: '/account/voucher/services/blance',
  swapVoucher: '/account/voucher/services/swap',
  splitVoucher: '/account/voucher/services/split',
  mergeVoucher: '/account/voucher/services/merge',
  reactivateVoucher: '/account/voucher/services/reactivate'
};
export const PATH_ACCOUNT_SHORT = {
  recipientDetails: '/account/my/orders/'
};

export const PATH_APP = {
  root: ROOTS.app,
  general: {
    root: path(ROOTS.app, '/dashboard'),
    dashboard: path(ROOTS.app, '/dashboard')
  },

  management: {
    root: path(ROOTS.app, '/management'),
    user: {
      root: path(ROOTS.app, '/management/user'),
      profile: path(ROOTS.app, '/management/user/profile'),
      cards: path(ROOTS.app, '/management/user/card'),
      list: path(ROOTS.app, '/management/user/list'),
      account: path(ROOTS.app, '/management/user/account')
    }
  }
};

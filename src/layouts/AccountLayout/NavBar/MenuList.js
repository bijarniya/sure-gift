// ------------------------------------------------------
const MenuList = [
  {
    label: 'Account Overview',
    linkTo: '/account/overview'
  },
  {
    label: 'My Orders',
    linkTo: '/account/my/orders'
  },
  {
    label: 'My Vouchers',
    linkTo: '/account/my/vouchers'
  },
  {
    label: 'Contacts',
    linkTo: '/account/contacts'
  },
  {
    label: 'Wallet',
    linkTo: '/account/wallet'
  },
  {
    label: 'Account Settings',
    linkTo: '/account/settings'
  },
  {
    label: 'Voucher Services',
    linkTo: '/account/voucher/services',
    items: [
      {
        label: 'Check Voucher Balance & History',
        linkTo: '/account/voucher/services/blance'
      },
      {
        label: 'Swap Voucher',
        linkTo: '/account/voucher/services/swap'
      },
      {
        label: 'Merge Voucher',
        linkTo: '/account/voucher/services/merge'
      },
      {
        label: 'Split Voucher',
        linkTo: '/account/voucher/services/split'
      },
      {
        label: 'Reactivate Voucher',
        linkTo: '/account/voucher/services/reactivate'
      }
    ]
  },
  {
    label: 'Support',
    linkTo: '/help'
  }
];

export default MenuList;

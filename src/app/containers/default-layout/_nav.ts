import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    // badge: {
    //   color: 'info',
    //   text: 'NEW'
    // }
  },
  {
    title: true,
    name: 'Master'
  },
  {
    name: 'Customer',
    url: '/customer',
    iconComponent: { name: 'cil-drop' }
  },
  // {
  //   title: true,
  //   name: 'Plan Menu'
  // },
  {
    name: 'Plans',
    url: '/plans',
    iconComponent: { name: 'cil-puzzle' }
  },
  // {
  //   name: 'Billing Menu',
  //   title: true
  // },
  // {
  //   name: 'Billing',
  //   url: '/billing',
  //   iconComponent: { name: 'cil-puzzle' },
  // },

  // {
  //   title: true,
  //   name: 'Reports Menu'
  // },
  {
    name: 'Reports',
    url: '/reports',
    iconComponent: { name: 'cil-star' },
 },
   {
    title: true,
    name: 'Reference'
  },

{
    name: 'RBM Research Center',
    url: 'https://coreui.io/product/angular-dashboard-template/',
    iconComponent: { name: 'cil-layers' },
    attributes: { target: '_blank' }
  }
];

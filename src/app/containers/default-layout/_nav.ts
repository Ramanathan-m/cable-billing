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
    name: 'Customer Menu'
  },
  {
    name: 'Customer',
    url: '/customer',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Billing Menu',
    title: true
  },
  {
    name: 'Billing',
    url: '/billing',
    iconComponent: { name: 'cil-puzzle' },
  },

  {
    title: true,
    name: 'Reports Menu'
  },
  {
    name: 'Reports',
    url: '/reports',
    iconComponent: { name: 'cil-star' },
 },

{
    name: 'RBM Research Center',
    url: 'https://coreui.io/product/angular-dashboard-template/',
    iconComponent: { name: 'cil-layers' },
    attributes: { target: '_blank' }
  }
];

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
  {
    name: 'Plans',
    url: '/plans',
    iconComponent: { name: 'cil-puzzle' }
  },
  {
    name: 'Reports',
    url: '/reports',
    iconComponent: { name: 'cil-star' },
 },
   {
    title: true,
    name: 'Notification'
  },
  {
    name: 'SMS ',
    url: '/sms',
    iconComponent: { name: 'cil-puzzle' }
  },
   {
    title: true,
    name: 'Help'
  },

{
    name: 'Contact Details',
    url: '/404',
    iconComponent: { name: 'cil-layers' },
    attributes: { target: '_blank' }
  }
];

import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: '',
    main: [
      {
        state: 'dashboard',
        short_label: 'D',
        name: 'Dashboard',
        type: 'sub',
        icon: 'icon-home',
        children: [
        {
            state: 'corporate',
            name: 'Corporate Dashboard',
          },
          {
            state: 'plant',
            name: 'Plant Dashboard',
          },
          {
            state: 'my',
            name: 'My Dashboard',
          },
          {
            state: 'summary',
            name: 'Summary'
          }
        ]
      }
    ]
  },
  {
    label: '',
    main: [
      {
        state: 'basic',
        short_label: 'B',
        name: 'GFSI',
        type: 'sub',
        icon: 'icon-layout-grid2-alt'
      }
    ]
  },
  {
    label: '',
    main: [
      {
        state: 'HACCP',
        short_label: 'F',
        name: 'HACCP',
        type: 'sub',
        icon: 'icon-layers'
      }
    ]
  },
  {
    label: '',
    main: [
      {
        state: 'Regulatory',
        short_label: 'B',
        name: 'Regulatory',
        type: 'sub',
        icon: 'icon-receipt'
      }
    ]
  },
  {
    label: '',
    main: [
      {
        state: 'Prerequisite Program',
        short_label: 'C',
        name: 'Prerequisite Program',
        type: 'sub',
        icon: 'icon-bar-chart-alt',
        children: [
          {
            state: 'EMP',
            name: 'EMP'
          }
        ]
      }
    ]
  },
  {
    label: '',
    main: [
      {
        state: 'Operating Procedures',
        short_label: 'A',
        name: 'Operating Procedures',
        type: 'sub',
        icon: 'icon-id-badge',
      }

    ]
  },
  {
    label: '',
    main: [
      {
        state: 'recordkeeping',
        short_label: 'T',
        name: 'Record Keeping',
        type: 'sub',
        icon: 'icon-check-box',
        children: [
          {
            state: 'raw-matrial',
            name: ' Raw Materials',
            
          }, 
          {
            state: 'Packaging',
            name: 'Packaging'
          },
           {
            state: 'Chemicals',
            name: 'Chemicals'
          },
           {
            state: 'Returns',
            name: 'Returns'
          }
        ]
      }
    ]
  },
   {
    label: '',
    main: [
      {
        state: 'configuration',
        short_label: 'C',
        name: 'Configuration',
        type: 'sub',
        icon: 'icon-settings',
        children: [
          {
            state: 'login-page',
            name: 'login page'
          },
          {
            state: 'user-menu',
            name: 'user management'
          },
        ]
      }
    ]
  }
 
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}

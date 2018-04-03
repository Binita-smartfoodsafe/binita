import { Injectable } from '@angular/core';
import { CommonService } from '../../../common/common.service';
import { API_ACTIONS, GLOBAL_PROPERTIES } from '../../../common/common.constant';
import { HttpRequestModal } from '../../../common/httpRequest.modal';
import { TreeviewItem } from 'ngx-treeview';

@Injectable()
export class UserMenuService {
  constructor(private comonSrvc: CommonService) {
  }
 getProducts(): TreeviewItem[] {
        const fruitCategory = new TreeviewItem({
            text: 'All', value: 'ALL', children: [
                { text: 'Dashboard', value: 'dashboard' , children: [
        {
            value: 'hazardanalysis',
            text: 'Hazard Analysis',
          },
          // {
          //   value: 'plant',
          //   text: 'Plant Dashboard',
          // },
          // {
          //   value: 'my',
          //   text: 'My Dashboard',
          // },
          // {
          //   value: 'summary',
          //   text: 'Summary'
          // }
        ]},
                { text: 'GFSC', value: 'GFSC'},
                { text: 'HACCP', value: 'HACCP'},
                { text: 'Regulatory', value: 'Regulatory'},
                { text: 'Prerequisite Program', value: 'PrerequisiteProgram'},
                { text: 'Operating Procedures', value: 'OperatingProcedures'},
                { text: 'Record Keeping', value: 'RecordKeeping',
                  children: [
                { text: 'Raw Materials', value: 'rawmaterial'},
                { text: 'Packaging', value: 'Packaging'},
                { text: 'Chemicals', value: 'Chemicals'},
                { text: 'Returns', value: 'Returns'}
            ] },
            { text: 'Configuration', value: 'configuration',
                  children: [
                { text: 'login page', value: 'login-page'},
                { text: 'user menu', value: 'user-menu'}
            ] }
            ]
        });

        fruitCategory.correctChecked(); // need this to make 'Vegetable' node to change checked value from true to false
        return [fruitCategory];
    }
  setUserMenuConfig(data){
    var reqPayload = {
      channel: GLOBAL_PROPERTIES.CHANNEL,
      companyId: data
    }
    //var httpRequest = new  HttpRequestModal(API_ACTIONS.login.fetchConfig, 'GET', reqPayload,true);
    var httpRequest = new  HttpRequestModal(API_ACTIONS.login.loginUser, 'POST', reqPayload,true);
    return this.comonSrvc.createHttpRequest(httpRequest);
  }

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
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}



// const MENUITEMS = [
//   {
//     label: '',
//     main: [
//       {
//         state: '',
//         short_label: 'H',
//         name: 'Hazard Analysis',
//         type: 'sub',
//         icon: 'icon-direction-alt',
//         children: [
//           {
//             state: 'riskassessment',
//             name: 'Risk Assessment',
//             type: 'sub',
//           }, {
//             state: 'monitoringdetails',
//             name: 'Monitoring Details',
//             type: 'sub',
//             // children: [
//             //   {
//             //     state: '',
//             //     name: '',
//             //   },
//             //   {
//             //     state: '',
//             //     name: '',
//             //   }
//             // ]
           
//           },

//           ]
//         },
//       ]
//     }
//   ]

import { Component, ElementRef,Injectable, ViewChild, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserMenuService } from './user-menu.service';
import {ColorPickerService, Rgba} from 'ngx-color-picker';
import {
    TreeviewI18n, TreeviewItem, TreeviewConfig, TreeviewHelper, TreeviewComponent,
    TreeviewEventParser, OrderDownlineTreeviewEventParser, DownlineTreeviewItem
} from 'ngx-treeview';
// import {DyanmicMenu} from '../../../calsses/dyanamicmenu';


@Injectable()
export class ProductTreeviewConfig extends TreeviewConfig {
    hasAllCheckBox = true;
    hasFilter = true;
    hasCollapseExpand = false;
    maxHeight = 400;
} 




@Component({
    selector: 'app-configuration',
    templateUrl: './user-menu.component.html',
    styleUrls: ['./user-menu.component.scss'],
    providers:[UserMenuService,
    { provide: TreeviewEventParser, useClass: OrderDownlineTreeviewEventParser },
    { provide: TreeviewConfig, useClass: ProductTreeviewConfig }]
})



export class UserMenuComponent implements OnInit {
    @ViewChild(TreeviewComponent) treeviewComponent: TreeviewComponent;
    items: TreeviewItem[];
    rows: string[];


// public dyanmicmenu:DyanmicMenu;


constructor(
    private service: UserMenuService
    ) { }

ngOnInit() {
    this.items = this.service.getProducts();
     const MENUITEMS = [ 
{
   name:'Regulatory',
   state:'Regulatory',
   isEdit:true,
   isShow:true
},
{
   name:'Prerequisite Program',
   state:'PrerequisiteProgram',
   isEdit:true,
   isShow:true
},
{
   name:'Operating Procedures',
   state:'OperatingProcedures',
   isEdit:true,
   isShow:true
},
{
   name:'Record Keeping',
   state:'RecordKeeping',
   isEdit:true,
   isShow:true,
   children:[
      {
         name:'Raw Materials',
         state:'rawmaterial',
         isEdit:true,
         isShow:true
      },
      {
         name:'Packaging',
         state:'Packaging',
         isEdit:true,
         isShow:true
      },
      {
         name:'Chemicals',
         state:'Chemicals',
         isEdit:true,
         isShow:true
      },
      {
         name:'Returns',
         state:'Returns',
         isEdit:true,
         isShow:true
      }
   ]
},
{
   name:'Configuration',
   state:'configuration',
    isEdit:true,
    isShow:true,
   children:[
      {
         name:'login page',
         state:'login-page',
        isEdit:true,
        isShow:true
      },
      {
         name:'user menu',
         state:'user-menu',
         isEdit:true,
        isShow:true
      }
   ]

}
];
    const USERTYPE = [
    { id: 'OPERATOR', state: 'Operator'},
    { id: 'Admin', state: 'Admin'}
    ];
}

onSelectedChange(downlineItems: DownlineTreeviewItem[]) {
    this.rows = [];
    downlineItems.forEach(downlineItem => {
        const item = downlineItem.item;
        const value = item.value;
        const texts = [item.text];
        let parent = downlineItem.parent;
        console.log('item',item);
        console.log('value',value);
        console.log('texts',texts);
        console.log('parent',parent);
        while (!_.isNil(parent)) {
            texts.push(parent.item.text);
            parent = parent.parent;
        }
        const reverseTexts = _.reverse(texts);
        const row = `${reverseTexts.join(' -> ')} : ${value}`;
        this.rows.push(row);
    });
}
removeItem(item: TreeviewItem) {
    let isRemoved = false;
    for (const tmpItem of this.items) {
        if (tmpItem === item) {
            _.remove(this.items, item);
        } else {
            isRemoved = TreeviewHelper.removeItem(tmpItem, item);
            if (isRemoved) {
                break;
            }
        }
    }

    if (isRemoved) {
        this.treeviewComponent.raiseSelectedChange();
    }
}
    //values = $event
   /* ngOnInit() {
        this.items = this.service.getBooks();
    }*/



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
//   ];
//   
// children: string = [];


private menus=[
      {
      'name':"Hazard Analysis",
      "class":"Hazard Analysis"
    },     
      {
      'name':"Hazard Analysis",
      "type":"children",
      "subopen":false,
      "children":[
          {
                'name':"Risk Assessment",
                'state': 'riskassessment'
              },
              {
                'name':"Monitoring Details",
                'state': 'riskassessment'
              },
               {
                'name':"Supporting Documents",
                'state': 'Monitoring Details'
              },
               {
                'name':"Schematics",
                'state': 'Schematics'
              },
               {
                'name':"Risk Assessment Model",
                'state': 'Risk Assessment Model'
              },
               {
                'name':"Decision Tree Model",
                'state': 'Decision Tree Model'
              },
               {
                'name':"Control Model",
                'state': 'Control Model'
              },
                {
                'name':"Reports",
                'state': 'Reports'
              }
          ]
      },
 ];

onMenusChange(event,value) {
    console.log("name changed", value);
    // this.menus.push("name changed, value is: " + value);
  }

}

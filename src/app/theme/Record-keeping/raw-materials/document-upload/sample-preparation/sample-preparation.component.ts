import { Component, Input, OnInit,Output,OnChanges,EventEmitter,ViewChild,SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { RawMaterialService } from '../../raw-material.service';
import { CommonService } from '../../../../../common/common.service';
import { AuthService } from '../../../../../common/auth.service';
import { LocationStrategy } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sample-preparation',
  templateUrl: './sample-preparation.component.html',
  styleUrls: ['./sample-preparation.component.scss',
    '../../../../../../assets/icon/icofont/css/icofont.scss']
})
export class SamplePreparationComponent implements OnInit {
  
  public itemAddForm: FormGroup;
  // @Input() sample: String = "abc"
  selectedTest: any = '';
  pathogenTest: any = "false";
  indicatorTest: any = 'false';
  virusTest: any = 'false';
  pesticideTest: any = 'false';
  test = '';
  public item: any = "";
  recordId = '';
  samples = [
    {
      supplierLot: "",
      newLot: 'false',
      po: "",
      totalQuantity: "",
      qualityAnalysis: false,
      quantityPlanned: '',
      indicatorTest:  false,
      pathogenTest: false,
      virusTest: false,
      pesticideTest: false
    }
  ];


    @Output() public sampleadded:EventEmitter<any>= new EventEmitter(); 

  constructor(
    public fb: FormBuilder,
    public rawMatService:RawMaterialService,
    public comonSrvc:CommonService,
    public router: Router,
    
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.recordId = params.id;
    });
  }

  ngOnInit() {
  }

  public changeNewLot(item): void {
    if (item.newLot != '') {
      item.pathogenTest = (item.newLot == "true") ? true : false;
      item.pesticideTest = (item.newLot == "true") ? true : false;
      item.virusTest = (item.newLot == "true") ? true : false;
    }
  }
  createForm() {
    // this.itemAddForm = this.fb.group({
    //   items: this.fb.array([
    //     this.fb.group({
    //       supplierlot: ['',],
    //       newlot: [''],
    //       ifnopreviouspo: [''],
    //       totalquality: [''],
    //       qcanalysys: [''],
    //       qualityplannedforsampling: [''],
    //       indicatortest: [''],
    //       pathogentest: [''],
    //       virustest: [''],
    //       Pestisidetest: [''],

    //     })
    //   ])
    // });
    // ]);    
  }
  public addRow(e: Event) {
    e.preventDefault();
    // let items = this.itemAddForm.controls.items as FormArray;
    // items.push(
    //   this.fb.group({
    //     supplierlot: ['',],
    //     newlot: [''],
    //     ifnopreviouspo: [''],
    //     totalquality: [''],
    //     qcanalysys: [''],
    //     qualityplannedforsampling: [''],
    //     indicatortest: [''],
    //     pathogentest: [''],
    //     virustest: [''],
    //     Pestisidetest: [''],
    //   })
    // );
    this.samples.push({
      supplierLot: "",
      newLot: 'false',
      po: "",
      totalQuantity: "",
      qualityAnalysis: false,
      quantityPlanned: '',
      indicatorTest:  false,
      pathogenTest: false,
      virusTest: false,
      pesticideTest: false
    })
  }

  removeRow(e,index: number) {
    e.preventDefault();
    this.samples.splice(index,1);
  }
  saveSampleRecord () {
    let obj = {
      record : this.recordId,
      samples : this.samples
    }
    this.rawMatService.saveSamplePreparation(obj).subscribe((response: any) => {
      this.comonSrvc.showSuccessMsg(response.message);
    }, err => { 
      this.comonSrvc.showErrorMsg(err.message);
    });
    // this.router.navigate(['/']);
  }
  
  public handleEvent(sampleadded:any){
    this.item = sampleadded;
  }

}

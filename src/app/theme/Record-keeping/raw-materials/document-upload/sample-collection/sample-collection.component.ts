import { Component, OnInit,Input,Output,EventEmitter,ViewChild} from '@angular/core';
import { RawMaterialService } from '../../raw-material.service';


@Component({
  selector: 'app-sample-collection',
  templateUrl: './sample-collection.component.html',
  styleUrls: ['./sample-collection.component.scss']
})
export class SampleCollectionComponent implements OnInit {

  constructor(
  	  public rawMatService:RawMaterialService,
  	) { }

   @ViewChild('addsample') public addsample;


  ngOnInit() {
     // this.rawMatService.sampleCollection.get()
    //      .then((sample_response)=>{
    //        this.sample=smaple_response;
    //      });
  }
  
  samples = [
    {
      sampplingno: "1",
      supplierlot: "32123",
      pictureofcaselabel: "",
      qcanalysissampling: false,
      microsampling:  false,
      virussampling: false,
      pesticidesampling: false,
      indicatororganismsampling: false
    },
  ];



//    samples : [
//      {
//        "supplierLot"         :"testLot1",
//        "newLot"              :"true",
//        "po"                  :"po1",
//        "totalQuantity"       : 10,
//        "quantityPlanned"     :10,
//        "qualityAnalysis"     :false,

     
//        "indicatorTest"       :false,
//        "pathogenTest"        :false,
//        "virusTest"           :false,
//        "pesticideTest"       :false,
//         "comment" :"samples are uploaded properly"
       

//      },
//      {
//        "supplierLot"         :"testLot2",
//        "newLot"              :"false",
//        "po"                  :"po234",
//        "totalQuantity"       : 9,
//        "quantityPlanned"     :10,
//        "qualityAnalysis"     :true,

     
//        "indicatorTest"       :true,
//        "pathogenTest"        :true,
//        "virusTest"           :true,
//        "pesticideTest"       :true,
//        "comment":"samples are uploaded properly"

       

//      },
//      {
//        "supplierLot"         :"testLot2",
//        "newLot"              :"false",
//        "po"                  :"Po123",
//        "totalQuantity"       : 10,
//        "quantityPlanned"     :10,
//        "qualityAnalysis"     :false,

     
//        "indicatorTest"       :false,
//        "pathogenTest"        :false,
//        "virusTest"           :false,
//        "pesticideTest"       :false,
//        "comment":"some samples are uploaded properly"

       

//      }
//    ]
// }

}

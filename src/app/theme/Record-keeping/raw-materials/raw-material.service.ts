import { Injectable } from '@angular/core';
import { CommonService } from '../../../common/common.service';
import { API_ACTIONS, GLOBAL_PROPERTIES } from '../../../common/common.constant';
import { HttpRequestModal } from '../../../common/httpRequest.modal';
import { Http } from '@angular/http';
import { HttpEventType } from '@angular/common/http';
import  { SamplePreparation } from '../../../classes/sample-preparation';

@Injectable()
export class RawMaterialService {
  constructor(

    private comonSrvc: CommonService,
    public http: Http
  ) { }

  // private headers= new Headers(
  //   {
  //     "Content-Type":"application/json",
  //     }

  //   );


// private baseUrl="http://localhost:4200/assets/json/sample-preparation.json"

  getPlant() {
    var reqPayload = {
      channel: GLOBAL_PROPERTIES.CHANNEL
    }
    var url = API_ACTIONS.raw_material.plant;
    var httpRequest = new  HttpRequestModal(url, 'GET',reqPayload,true);
    return this.comonSrvc.createHttpRequest(httpRequest);
  }
  getSupplier(id) {
    var reqPayload = {
      channel: GLOBAL_PROPERTIES.CHANNEL
    }
    var url = API_ACTIONS.raw_material.supplier+'?plant='+id;
    var httpRequest = new  HttpRequestModal(url, 'GET',reqPayload,true);
    return this.comonSrvc.createHttpRequest(httpRequest);
  }
  getBroker(obj) {
    var reqPayload = {
      channel: GLOBAL_PROPERTIES.CHANNEL
    }
    var url = API_ACTIONS.raw_material.broker+'?plant='+obj.plantId+'&supplier='+obj.supplierId;
    var httpRequest = new  HttpRequestModal(url, 'GET',reqPayload,true);
    return this.comonSrvc.createHttpRequest(httpRequest);
  }

  //   getSamplePreparation(obj) {
  //   var reqPayload = {
  //     channel: GLOBAL_PROPERTIES.CHANNEL
  //   }
  //   var url = API_ACTIONS.raw_material.samplepreparation+'?supplierlot='+obj.supplierlot+'&supplier='+obj.supplierlot;
  //   var httpRequest = new  HttpRequestModal(url, 'GET',reqPayload,true);
  //   return this.comonSrvc.createHttpRequest(httpRequest);
  // }

  getProduct(obj) {
    var reqPayload = {
      channel: GLOBAL_PROPERTIES.CHANNEL
    }
    var url = API_ACTIONS.raw_material.product+'?plant='+obj.plantId+'&supplier='+obj.supplierId+'&brokerId='+obj.brokerId;
    var httpRequest = new  HttpRequestModal(url, 'GET',reqPayload,true);
    return this.comonSrvc.createHttpRequest(httpRequest);
  }
  saveRecord (obj){
    var url = API_ACTIONS.raw_material.record;
    var httpRequest = new  HttpRequestModal(url, 'POST',obj,true);
    return this.comonSrvc.createHttpRequest(httpRequest);
  }
  getRecord (){
    var reqPayload = {
      channel: GLOBAL_PROPERTIES.CHANNEL
    }
    var url = API_ACTIONS.raw_material.record;
    var httpRequest = new  HttpRequestModal(url, 'GET',reqPayload,true);
    return this.comonSrvc.createHttpRequest(httpRequest);
  }
  uploadAttachment (obj){
    var url = GLOBAL_PROPERTIES.BASE_API_URL + API_ACTIONS.raw_material.record+'/attachment';
    console.log(url);
    return this.http.post(url,obj);
  }
  getRecordData (id){
    var reqPayload = {
      channel: GLOBAL_PROPERTIES.CHANNEL
    }
    var url = API_ACTIONS.raw_material.record+'?_id='+id;
    var httpRequest = new  HttpRequestModal(url, 'GET',reqPayload,true);
    return this.comonSrvc.createHttpRequest(httpRequest);
  }

  getRawMatrialGroup (obj){
    var reqPayload = {
      channel: GLOBAL_PROPERTIES.CHANNEL
    }
    var url = API_ACTIONS.raw_material.rawmaterial+'/groups?plant='+obj.plantId+'&supplier='+obj.supplierId+'&brokerId='+obj.brokerId;
    var httpRequest = new  HttpRequestModal(url, 'GET',reqPayload,true);
    return this.comonSrvc.createHttpRequest(httpRequest);
  }
  getRawMatrial (obj){
    var reqPayload = {
      channel: GLOBAL_PROPERTIES.CHANNEL
    }
    var url = API_ACTIONS.raw_material.rawmaterial+'?plant='+obj.plantId+'&supplier='+obj.supplierId+'&brokerId='+obj.brokerId+'rmGroupName'+obj.matrialGrp;
    var httpRequest = new  HttpRequestModal(url, 'GET',reqPayload,true);
    return this.comonSrvc.createHttpRequest(httpRequest);
  }
  saveSamplePreparation (obj){
    var url = API_ACTIONS.raw_material.record+'/samplePreparation';
    var httpRequest = new  HttpRequestModal(url, 'POST',obj,true);
    return this.comonSrvc.createHttpRequest(httpRequest);
  }

   sampleCollection (obj){
    var url = API_ACTIONS.raw_material.record+'/';
    var httpRequest = new  HttpRequestModal(url, 'GET',obj,true);
    return this.comonSrvc.createHttpRequest(httpRequest);
  }
}

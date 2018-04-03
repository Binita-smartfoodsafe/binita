import { Injectable } from '@angular/core';
import { CommonService } from '../../../common/common.service';
import { API_ACTIONS, GLOBAL_PROPERTIES } from '../../../common/common.constant';
import { HttpRequestModal } from '../../../common/httpRequest.modal';

@Injectable()
export class LoginPageService {
  constructor(private comonSrvc: CommonService) {
  }
  setLoginPageConfig(dataP){
    var reqPayload = {
  "clientId"            : GLOBAL_PROPERTIES.CLIENTID,
    "backgroundImg"            : dataP.backgroundImg.value,
    "backgroundImgName"    : dataP.backgroundImg.filename,
    "logoImg"            :  dataP.logoImg.value,
    "logoImgName"    : dataP.logoImg.filename,
    "themeCol1"            :  dataP.themeColor,
    "themeCol2"            :  dataP.themeColor
}
    var httpRequest = new  HttpRequestModal(API_ACTIONS.configuration.loginConfig, 'POST', reqPayload,true);
    return this.comonSrvc.createHttpRequest(httpRequest);
  }

}

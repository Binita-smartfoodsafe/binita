import { Injectable } from '@angular/core';
import { CommonService } from '../../common/common.service';
import { API_ACTIONS, GLOBAL_PROPERTIES } from '../../common/common.constant';
import { HttpRequestModal } from '../../common/httpRequest.modal';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import { AngularFireAuthModule,AngularFireAuth  } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
@Injectable()
export class LoginService {
  constructor(private comonSrvc: CommonService,private fireAuth:AngularFireAuth ) {
  }
  verifyUser(data) {
    var reqPayload = {
      username: data.username,
      password: data.password
    }
    var httpRequest = new  HttpRequestModal(API_ACTIONS.login.loginUser, 'POST', reqPayload,true);
    return this.comonSrvc.createHttpRequest(httpRequest);
  }
  fetchConfig(data){
    var reqPayload = {
      channel: GLOBAL_PROPERTIES.CHANNEL,
      companyId: data
    }
    var httpRequest = new  HttpRequestModal(API_ACTIONS.configuration.loginConfig, 'GET', reqPayload,true);
    return this.comonSrvc.createHttpRequest(httpRequest);
  }


showForgotPassword(email:any)
{
  return this.fireAuth.auth.sendPasswordResetEmail(email);

}

}

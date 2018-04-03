import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL_PROPERTIES } from './common.constant';

import { Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/timeout'
import { Observable } from 'rxjs/Observable';
import { ToastrService } from 'ngx-toastr';
import { HttpRequestModal } from './httpRequest.modal';


@Injectable()
export class CommonService {

    private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    constructor(public http: HttpClient, private toastr: ToastrService) {
    }
    createHttpRequest(dataObject: HttpRequestModal) {

        /*dataObject.payload['feSessionId'] = this.generateFeSessionId();*/
        console.log('BASE_API_URL', GLOBAL_PROPERTIES.BASE_API_URL + dataObject.actionName);
        if (dataObject.method == 'POST') {
            return this.http.post(
                GLOBAL_PROPERTIES.BASE_API_URL + dataObject.actionName,
                dataObject.payload,
                this._options).timeout(GLOBAL_PROPERTIES.REQUEST_TIMEOUT * 1000);
        } else if (dataObject.method == 'GET') {
            //let baseUrl = "http://localhost/FS_Resource/api/";
            let baseUrl = GLOBAL_PROPERTIES.BASE_API_URL;
            return this.http.get(baseUrl + dataObject.actionName);
        }
    }

    showSuccessMsg(msg): void {
        setTimeout(() => this.toastr.success(msg, 'Success!', { timeOut: 2000, closeButton: true }));
    }

    showErrorMsg(msg): void {
        setTimeout(() => this.toastr.error(msg, 'Error!', { timeOut: 2000, closeButton: true }));
    }

    generateFeSessionId() {
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var length = 11;
        var string = '', rnd;
        while (length > 0) {
            rnd = Math.floor(Math.random() * chars.length);
            string += chars.charAt(rnd);
            length--;
        };
        return GLOBAL_PROPERTIES.FE_SESSIONID_PREFIX + string;
    }

}

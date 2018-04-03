import { Injectable } from '@angular/core';
@Injectable()
export class AuthService {

    intialAuth: boolean = false;
    token: any;

    constructor() {
    }

    setupJWTToken = function (data) {
        if (undefined !== data.token && null != data.token) {
            //$window.localStorage['jwtToken'] = data.token;
            this.intialAuth = true;
            this.token = data.token;
            this.isAuthed();
        }
    }
    isAuthed(): boolean {
        if (this.intialAuth) {
            var token = this.getToken();
            if (token !== undefined) {
                // var params = self.parseJwt(token);
                //var expireDate = jwtHelper.getTokenExpirationDate(token);
                //return new Date() <= expireDate;
                return true
            } else {
                return false;
            }
        }
        else {
            return false;
        }
    }

    getToken() {
        return this.token;
    }
}

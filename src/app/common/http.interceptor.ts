import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GLOBAL_PROPERTIES } from './common.constant';
import { AuthService } from './auth.service';
import { LoadingService } from './loading.service';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService, private loadingSrvc: LoadingService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        /*for json mock start*/
        /*if (req.responseType == 'json') {
            req = req.clone({ responseType: 'text' });

            return next.handle(req).map(response => {
                if (response instanceof HttpResponse) {
                    response = response.clone<any>({ body: JSON.parse(response.body) });
                }

                return response;
            });
        }*/
        /*for json mock start*/
        let token = this.auth.getToken();
        this.loadingSrvc.showLoader();
        if (token) {
            return next.handle(req.clone({ setHeaders: { 'x-access-token': token } })).do(response => {
                if (response instanceof HttpResponse) {
                      this.loadingSrvc.hideLoader();
                   this.auth.setupJWTToken(response.body);
                }
            }, (err: any) => {
                if (err instanceof HttpErrorResponse && err.status === 401) {
                      this.loadingSrvc.hideLoader();
                    // redirect to the login route// or show a modal
                }
            });
        }
        else {
            return next.handle(req).do(response => {
                  this.loadingSrvc.hideLoader();
                if (response instanceof HttpResponse) {
                    this.auth.setupJWTToken(response.body);
                }
            }, (err: any) => {
                 this.loadingSrvc.hideLoader();
                if (err instanceof HttpErrorResponse && err.status === 401) {
                    // redirect to the login route// or show a modal
                }
            });
        }


    };
};
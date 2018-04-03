import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import  { Rawmaterial } from '../classes/rawmaterial';
import  { Broker } from '../classes/broker';

@Injectable()
export class BrokerService {
	private baseUrl="http://localhost:4200/assets/json/sample-preparation.json"

  constructor(private http:Http) { }
	private headers= new Headers(
		{
			"Content-Type":"application/json",
			}

		);

  	get(supplier:Broker):Promise<Broker>{
	  	return this.http
	  		.get(this.baseUrl,{headers:this.headers})
	  		.toPromise()
	  		.then(res=>res.json()as Broker)	
	  }

	view(id: number):Promise<Broker>{
		 const baseUrl = `${this.baseUrl}/${id}`;
		 return this.http.get(baseUrl,{headers:this.headers})
		.toPromise()
		.then(response =>{ return response.json() as Broker ;})
	  		
	}

	
 
 
	 // list(extradata=undefined):Promise<Supplier>{
  //         return list(extradata)
  //         .toPromise()
  //         .then(response =>{
  //          return response as Supplier
  //         })
  //         .catch((error)=>{return this.handleError(error)});
  //   }
}

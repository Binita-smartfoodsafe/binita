import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import  { Rawmaterial } from '../classes/rawmaterial';
import  { Supplier } from '../classes/supplier';


@Injectable()
export class SupplierService {
	private baseUrl="http://localhost:3000/supplier"

  constructor(private http:Http) { }
  	private headers= new Headers(
		{
			"Content-Type":"application/json",
			}

		);

  	get(supplier:Supplier):Promise<Supplier>{
	  	return this.http
	  		.get(this.baseUrl,{headers:this.headers})
	  		.toPromise()
	  		.then(res=>res.json()as Supplier)	
	  }

	view(id: number):Promise<Supplier>{
		 const baseUrl = `${this.baseUrl}/${id}`;
		 return this.http.get(baseUrl,{headers:this.headers})
		.toPromise()
		.then(response =>{ return response.json() as Supplier ;})
	  		
	}

	
	  // samplePreparation(): Observable<Response> {
   //     return this.http.get("/assets/json/sample-preparation.json");
   // }}

 
	 // list(extradata=undefined):Promise<Supplier>{
  //         return list(extradata)
  //         .toPromise()
  //         .then(response =>{
  //          return response as Supplier
  //         })
  //         .catch((error)=>{return this.handleError(error)});
  //   }	
  }
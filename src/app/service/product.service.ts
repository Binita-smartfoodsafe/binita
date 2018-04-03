import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import  { Product } from '../classes/product';
import  { Rawmaterial } from '../classes/rawmaterial';


@Injectable()
export class ProductService {

private baseUrl="http://localhost:3000/product"

  constructor(private http:Http) { }

  private headers= new Headers(
		{
			"Content-Type":"application/json",
			}

		);

  	get(supplier:Product):Promise<Product>{
	  	return this.http
	  		.get(this.baseUrl,{headers:this.headers})
	  		.toPromise()
	  		.then(res=>res.json()as Product)	
	  }

	view(id: number):Promise<Product>{
		 const baseUrl = `${this.baseUrl}/${id}`;
		 return this.http.get(baseUrl,{headers:this.headers})
		.toPromise()
		.then(response =>{ return response.json() as Product ;})
	  		
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

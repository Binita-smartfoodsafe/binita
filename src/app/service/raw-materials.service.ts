import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

// import { Observable } from 'rxjs/Observable';
import {Observable} from 'rxjs/Rx';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/observable/throw';

// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/of';
import  { Rawmaterial } from '../classes/rawmaterial';

@Injectable()
export class RawMaterialsService {

   private baseUrl = 'http://localhost:3000/plant';

    constructor(private http: Http) { }
     private headers=new Headers(
    {
        "Content-Type":"application/json",
        
        // "Authorization":"Bearer "+this.access_token

    } 
  );


     	handleToken:any;
     	handleError:any;
     	toPromise:any;


	get(rawmaterial:Rawmaterial): Promise<Rawmaterial>{	  
			  return this.http
			  .get(this.baseUrl,{headers: this.headers})  
			  .toPromise()	
			  .then(res=> res.json() as Rawmaterial)		  
		  
	}

	view(id: number):Promise<Rawmaterial>{
		 const baseUrl = `${this.baseUrl}/${id}`;
		 return this.http.get(baseUrl,{headers:this.headers})
		.toPromise()
		.then(response =>{ return response.json() as Rawmaterial ;})
	  		
	}
	
	 // list(extradata=undefined):Promise<Rawmaterials>{
  //         return list(extradata)
  //         .toPromise()
  //         .then(response =>{
  //          return response as Rawmaterials
  //         })
  //         .catch((error)=>{return this.handleError(error)});
  //   }
  //   
    create(rawmaterial:Rawmaterial): Promise<Rawmaterial>{
          // return this.messenger.handleToken(this).then(()=>{
      return this.http
      .post(this.baseUrl,JSON.stringify(rawmaterial),{headers: this.headers})  
      .toPromise()
      .then(res=> res.json() as Rawmaterial)
      // .catch((error)=>this.messenger.handleError(error));});
     }
}
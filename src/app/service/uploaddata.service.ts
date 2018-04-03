import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class UploaddataService {

	 	public baseUrl='http://localhost:3000/attachment'

  constructor(private http:Http) { }

//   	this.upload .onCompleteFile=(File:any, response:any,status:any,
//   		headers:any){
// 	this.attachmentList.push(JSON.parse(response));
// }
  	private headers= new Headers(
		{
			"Content-Type":"multipart/form-data",
			}

		);	

uploaddata (FormData:any){
	return this.http
	.post(this.baseUrl,{headers:this.headers})
	// .then(response =>{
	// 	console.log("upload sucess")
 //         return response 
 //          })

	 	.catch(this.errorHandler);
			 }
			 private errorHandler(error:Response){
			 	console.error("Error :" + error);
			 	return Observable.throw(error || " Error on Server ");

	 		}

 getdata(){
	 	let baseUrl="http://localhost:3000/record";

	 	return this .http.get(baseUrl)
	 	.catch(this. errorHandler);
	 }
}

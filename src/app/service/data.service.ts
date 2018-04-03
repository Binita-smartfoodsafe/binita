import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  str : String = 'sample data';

  getData(){
  	return this.str;
  }

  setData(){
  	this.str = 'changed data';
  }

}

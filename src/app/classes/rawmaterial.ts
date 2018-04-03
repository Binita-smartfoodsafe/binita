import { Plant } from './plant'; 
import { Address } from './address'; 
import { Broker } from './broker'; 
import { Supplier } from './supplier'; 
import { Product } from './product'; 

export class Rawmaterial {
  
	  id:number;
  	createdDate :string ;
  	createdBy : string;
	  coo : string;
 	  productCode :string;
 	  variety : string;
  	kosher : string;
  	nonGMO : string;
  	po : string;
  	containerNo :string;
  	lotNo :string;     
    plant:Plant;
    address:Address;
    broker:Broker;
    supplier:Supplier;
    product:Product;
    organic:string;
}

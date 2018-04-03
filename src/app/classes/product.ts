import { Rawmaterial } from './rawmaterial'; 
import { Plant } from './plant'; 
import { Customer } from './customer'; 
import { Supplier } from './supplier'; 

export class Product {
			plantId:Plant[]; 
			customerId:Customer[]; 
			supplierId:Supplier[]; 
			counrty:string; 
			name:string; 
			productId:number; 
			netweight :string; 
			description :string; 
			rawMaterial :Rawmaterial[]; 
}

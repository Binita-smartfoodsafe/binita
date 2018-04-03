import {SamplePreparation} from './sample-preparation'; 

export class Supplier {	
   id:number;
   name: string ;
   country:string;
   state: string; 
   city:string;  
   pin:string;
   fax: string;
   phone: string; 
   contactSalutation :string;
   contactFirstName  : string;
   samplepreparation:SamplePreparation;

}
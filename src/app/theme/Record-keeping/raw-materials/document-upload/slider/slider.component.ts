import { Component, OnInit,Input } from '@angular/core';
import { Image } from '../../../../../classes/image';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() images:Image[];
	public curimages:Image[];
	public numberIndex:number=0;
	public displayItem:number=4;
	public slideup:boolean=false;
	public slidedown:boolean=false;
  constructor() 
  {}

  ngOnInit() {
  	this.ngOnchanges();
  }
  ngOnchanges(){
  	if(this.images!==undefined) {
  		if (this.images.length > this.displayItem){
  			this.curimages=this.images.slice(0,this.displayItem);
  		}else{
  			this.curimages=this.images;
  		}
  	}
  	
  }

 public up(){
    if (this.numberIndex + this.displayItem < this.images.length) { 
      let nextimage=this.images[this.numberIndex +this.displayItem] ;
      this.slideup=true;
      this.curimages.push(nextimage);
      this.numberIndex++;
      setTimeout(()=>{
        this.slideup=false;
        this.curimages.shift();
      },1000);
    } 
}

 public down(){
	    if (this.numberIndex >0 ) { 
	    	let nextimage=this.images[this.numberIndex -1] ;
	      this.slidedown=true;
	      this.curimages.unshift(nextimage);
	      this.numberIndex--;
	      setTimeout(()=>{
	        this.slidedown=false;
	        this.curimages.pop();
	      },1000);
	    } 
	}

}
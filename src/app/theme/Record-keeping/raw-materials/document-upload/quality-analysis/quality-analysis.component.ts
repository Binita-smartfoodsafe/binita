import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quality-analysis',
  templateUrl: './quality-analysis.component.html',
  styleUrls: ['./quality-analysis.component.scss']
})
export class QualityAnalysisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

		characteristics: string = "Count for 500gm"; 
		description: string = "No. of pieces in 500gm"; 
		unit: string = "pieces"; 
		one: string = "33"; 
		two: string = "45"; 
		three: string = "28"; 
		four: string = "28"; 
		five: string = "28";

}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityAnalysisComponent } from './quality-analysis.component';

describe('QualityAnalysisComponent', () => {
  let component: QualityAnalysisComponent;
  let fixture: ComponentFixture<QualityAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

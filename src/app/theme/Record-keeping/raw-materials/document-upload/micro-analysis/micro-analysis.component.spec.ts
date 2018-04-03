import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroAnalysisComponent } from './micro-analysis.component';

describe('MicroAnalysisComponent', () => {
  let component: MicroAnalysisComponent;
  let fixture: ComponentFixture<MicroAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

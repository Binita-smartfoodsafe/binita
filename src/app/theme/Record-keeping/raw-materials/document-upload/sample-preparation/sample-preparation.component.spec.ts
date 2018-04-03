import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePreparationComponent } from './sample-preparation.component';

describe('SamplePreparationComponent', () => {
  let component: SamplePreparationComponent;
  let fixture: ComponentFixture<SamplePreparationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplePreparationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplePreparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

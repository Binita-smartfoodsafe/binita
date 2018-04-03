import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleImageComponent } from './sample-image.component';

describe('SampleImageComponent', () => {
  let component: SampleImageComponent;
  let fixture: ComponentFixture<SampleImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

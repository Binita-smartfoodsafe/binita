import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawmaterialDetailsComponent } from './rawmaterial-details.component';

describe('RawmaterialDetailsComponent', () => {
  let component: RawmaterialDetailsComponent;
  let fixture: ComponentFixture<RawmaterialDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawmaterialDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawmaterialDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

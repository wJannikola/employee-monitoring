import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivalEditComponent } from './arrival-edit.component';

describe('ArrivalEditComponent', () => {
  let component: ArrivalEditComponent;
  let fixture: ComponentFixture<ArrivalEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrivalEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrivalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

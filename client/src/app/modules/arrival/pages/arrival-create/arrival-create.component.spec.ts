import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivalCreateComponent } from './arrival-create.component';

describe('ArrivalCreateComponent', () => {
  let component: ArrivalCreateComponent;
  let fixture: ComponentFixture<ArrivalCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrivalCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrivalCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

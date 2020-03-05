import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivalListComponent } from './arrival-list.component';

describe('ArrivalListComponent', () => {
  let component: ArrivalListComponent;
  let fixture: ComponentFixture<ArrivalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrivalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrivalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

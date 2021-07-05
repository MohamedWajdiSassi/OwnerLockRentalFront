import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceTruckingComponent } from './device-trucking.component';

describe('DeviceTruckingComponent', () => {
  let component: DeviceTruckingComponent;
  let fixture: ComponentFixture<DeviceTruckingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceTruckingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceTruckingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddDeviceComponent } from './add-device/add-device.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceHistoryComponent } from './device-history/device-history.component';
import { CustomerReqComponent } from './customer-req/customer-req.component';
import { DeviceTruckingComponent } from './device-trucking/device-trucking.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';


@NgModule({
  declarations: [
    HomeComponent,
    AddDeviceComponent,
    DeviceListComponent,
    DeviceHistoryComponent,
    CustomerReqComponent,
    DeviceTruckingComponent,
    CustomerInfoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgbModule
  ]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceHistoryComponent } from './device-history/device-history.component';
import { CustomerReqComponent } from './customer-req/customer-req.component';
import { DeviceTruckingComponent } from './device-trucking/device-trucking.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { ChartsComponent } from './charts/charts.component';




const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'add-device',
    component:AddDeviceComponent
  },
  {
    path:'device-lists',
    component:DeviceListComponent
  },
  {
    path:'device-history',
    component:DeviceHistoryComponent
  },
  {
    path:'customers-requstes',
    component:CustomerReqComponent
  },
  {
    path:'device-trucking',
    component:DeviceTruckingComponent
  },
  {
    path:'customer-info',
    component:CustomerInfoComponent
  },
  {
    path:'charts',
    component:ChartsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from 'src/app/model/device.model';
import { DeviceService } from 'src/app/_service/device.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss']
})
export class AddDeviceComponent implements OnInit {
  devices: any[] = [];
  device:Device ;
  
  

  constructor(private deviceService :DeviceService, private router:Router) { }

  ngOnInit(): void {
   
  }
  saveDevice( f:any) {
    console.log(f);
    
    console.log(f.value)
    
    this.deviceService.saveDevice(f.value).pipe().subscribe(data => {console.log(data)}, error =>{console.log(error)}
    
    );
    
   }

}

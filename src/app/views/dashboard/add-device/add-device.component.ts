import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from 'src/app/model/Device.model';
import { DeviceService } from 'src/app/_service/device.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss']
})
export class AddDeviceComponent implements OnInit {
  devices: any[] = [];
  device:Device ;
  
  

  constructor(private deviceService :DeviceService, private router:Router ,private toastr: ToastrService) { }

  ngOnInit(): void {
   
  }
  showSuccess() {
    this.toastr.success('Your device has been successfully added!', 'Well Done!');
  }
  showFaild(){
    this.toastr.warning('Something Wrong you need to try again! ','Warning');
  }
  saveDevice( f:any) {
    //console.log(f);
    
    console.log(f.value)
    
    this.deviceService.saveDevice(f.value).pipe().subscribe(data => {console.log(data)}, error =>{console.log(error)}
    
    );
    
   } 
   test(){
     if (this.saveDevice != null){
       this.showSuccess
     }else{
       this.showFaild
     }
   }
   

}

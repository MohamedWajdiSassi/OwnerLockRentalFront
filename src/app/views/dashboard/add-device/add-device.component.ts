import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from 'src/app/model/Device.model';
import { DeviceService } from 'src/app/_service/device.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import {AngularFireStorage} from '@angular/fire/storage';


@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss']
})
export class AddDeviceComponent implements OnInit {
  devices: any[] = [];
  device:Device ;
  selectedFile: File;
  
  

  constructor(private deviceService :DeviceService, private router:Router ,private toastr: ToastrService,private http:HttpClient, private af:AngularFireStorage) { }

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
   onFileSelected(event:any){
     console.log(event);
     this.selectedFile = <File>event.target.files[0];
    
  }
  onUpload(){
    const fd =new FormData();
    fd.append('image', this.selectedFile,this.selectedFile.name);
    this.af.upload('/files', fd,{
      
      
    });
  }

   

}

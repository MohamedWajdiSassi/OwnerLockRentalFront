import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from 'src/app/model/Device.model';
import { DeviceService } from 'src/app/_service/device.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import * as firebase from 'firebase/app';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { finalize } from 'rxjs/operators';
import { FileUpload } from 'src/app/model/file-upload.model'; 
import { Observable } from 'rxjs';




@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss']
})
export class AddDeviceComponent implements OnInit {
  private basePath = '/Devices';
  devices: any[] = [];
  device:Device ;
  selectedFile: File;
  task:AngularFireUploadTask;
  ref:AngularFireStorageReference;
  
  

  constructor(private deviceService :DeviceService, private router:Router ,private toastr: ToastrService,private http:HttpClient, private storage:AngularFireStorage,private db: AngularFireDatabase) { }

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
    console.log("//////////////////")
    console.log(f.value)
    
    this.deviceService.saveDevice(f.value).pipe().subscribe(data => {console.log(data) , this.device =data}, error =>{console.log(error)}
    
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
  onUpload(event:any){
    
    const file:File= event.target.files[0];
    
    const metaData = { 'contentType':file.name};
  

    const storageRef : firebase.default.storage.Reference=firebase.default.storage().ref().child('/photos/featured/url1');
    console.log(this.selectedFile)
    storageRef.put(file,metaData);
    console.log("Selected file name :",file.name);
  }
 
  pushFileToStorage(fileUpload: FileUpload): Observable<number | undefined> {
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;
          this.saveFileData(fileUpload);
        });
      })
    ).subscribe();

    return uploadTask.percentageChanges();
  }
  private saveFileData(fileUpload: FileUpload): void {
    this.db.list(this.basePath).push(fileUpload);
  }

  getFiles(numberItems: number): AngularFireList<FileUpload> {
    return this.db.list(this.basePath, ref =>
      ref.limitToLast(numberItems));
  }

}

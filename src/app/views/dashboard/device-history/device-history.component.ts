import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { history } from 'src/app/model/History.model';
import { HistoryService } from 'src/app/_service/history.service';

@Component({
  selector: 'app-device-history',
  templateUrl: './device-history.component.html',
  styleUrls: ['./device-history.component.scss']
})
export class DeviceHistoryComponent implements OnInit {

  historys: any=[];
  history:history;

  constructor(private toastr: ToastrService,private router:Router, private historyService:HistoryService) { }

  ngOnInit(): void { 
    this.getAllDevicesList();
  }
  showSuccess() {
    this.toastr.success('Your device has been successfully added!', 'Well Done!');
  }
  showFaild(){
    this.toastr.warning('Something Wrong you need to try again! ','Warning!!!');
  }
  saveHistory( f:any) {
    //console.log(f);
    
    console.log(f.value)
    
    this.historyService.saveHistory(f.value).pipe().subscribe(data => {console.log(data)}, error =>{console.log(error)}
    
    );
    
   } 

   getAllDevicesList() {

    this.historyService.getAllHistorys().pipe().subscribe(data => {

      console.log(data)

      this.historys = data;


    })



  }



}

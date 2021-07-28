import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Device } from '../model/device.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  
  device :Device

  constructor(private http: HttpClient) { }
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  saveDevice(value: any): Observable<any> {
    
    
    return this.http.post<any>(environment.apiUrl+'/deviceInfo/createDevice/61015420ebdb9928b379344f/mychannel' , {
      value , httpOptions
    }
   );
  }
  getAllDevices(): Observable<any> {
    return this.http.get(environment.apiUrl+'/deviceInfo/allDevices/owner/channel');
  }
  deleteHero(id: number): Observable<unknown> {
    
    return this.http.delete(environment.apiUrl+'/deviceInfo/deleteDevice/channel/idDevice')
     
  }
  updateHero(value: any): Observable<any> {
    return this.http.put(environment.apiUrl+'/deviceInfo/updateDevice/channel/idOwner/idDevice',value)   
  }
  

}

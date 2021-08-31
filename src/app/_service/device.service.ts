import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Device } from '../model/Device.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  devices : Device[];
  device :Device;
  channel = "mychannel";
  ownerId : string ;

  constructor(private http: HttpClient) { }
  
  saveDevice(value: Device): Observable<Device> {
    
    console.log(value)

    return this.http.post<Device>(environment.apiUrl+'/deviceInfo/createDevice/612cd3fb3bac4b0fcbd8bea2/'+this.channel , 
    JSON.stringify(value), httpOptions
   );
  }
  getAllDevices(): Observable<any> {
    return this.http.get(environment.apiUrl+'/deviceInfo/allDevices/wajdi%20sassi/'+this.channel,{ });
  }
  deleteDevice(id: String): Observable<any> {
    
    return this.http.delete(environment.apiUrl+'/deviceInfo/deleteDevice/'+this.channel+'/'+id)
     
  }
  updateDevice(value: Device): Observable<Device> {
    return this.http.put<Device>(environment.apiUrl+'/deviceInfo/updateDevice/'+this.channel+'/612cd3fb3bac4b0fcbd8bea2/'+this.device.idDevice, JSON.stringify(value) ,httpOptions) ; 
  }
  

}
//return this.httpClient.put<Product>(this.apiServer + '/products/' + id, JSON.stringify(product), this.httpOptions)

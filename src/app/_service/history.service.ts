import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { history } from '../model/History.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  history :history;
  historys:history[];
  channel = "mychannel";

  constructor(private http: HttpClient) { }
  saveHistory(value: history): Observable<history> {
    
    console.log(value)
    
    return this.http.post<history>(environment.apiUrl+'/history/creatUserHistory/6103b6b72eb930774a2d6712/6103b70f2eb930774a2d6713/'+this.channel , 
    JSON.stringify(value), httpOptions
   );
  }
  getAllHistorys(): Observable<any> {
    return this.http.get(environment.apiUrl+'/history/allUserHistory/'+this.channel+'/6103b70f2eb930774a2d6713',{ });
  }
  deleteHistory(id: String): Observable<any> {
    
    return this.http.delete(environment.apiUrl+'/history/deleteUserHistory/'+this.channel+'/'+id)
     
  }
  updateHistory(id:String,value: history): Observable<any> {
    return this.http.put<any>(environment.apiUrl+'/history/updateUserHistory/'+this.channel,value ,httpOptions)   
  }
  


}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Owner } from '../model/Owner.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  constructor(private http: HttpClient) { }

  login(value:any) :Observable<any> {
    return this.http.post(environment.apiUrl + '/auth/signIn', {
      'email': value.email,
      'passwd': value.passwd 
    });
  }

  getOwners(id:string){

    return this.http.get(environment.apiUrl+'/owner/oneOwner/'+id,{ });
  }
  
  getAllOwner(){
    return this.http.get(environment.apiUrl+'/owner/allOwner',{ });
  }
}

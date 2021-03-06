import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class AdminService {
  private _headers = {headers: new HttpHeaders()
    .set('Content-Type' , 'application/json')};
  constructor(private http: HttpClient) { }


  getAllUsers(){
    return this.http.get('http://104.156.224.24:8080/CS5200-project-new/rest/restaurant/allUsers',this._headers);
  }

  deleteUser(id){
    return this.http.post('http://104.156.224.24:8080/CS5200-project-new/rest/restaurant/deleteUserById/'+id,this._headers);
  }

}

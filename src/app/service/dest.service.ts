import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestService {

  constructor(private http:HttpClient) { }

  apiurl='https://localhost:44308/Designation'
  GetAll():Observable<object>{
    return this.http.get(this.apiurl);
  }
  GetByCode(code:any){
    return this.http.get(this.apiurl+'/'+code);
  }
  Save(inputdata:any){
    return this.http.post(this.apiurl,inputdata);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
apiurl_des='https://localhost:44308/Designation'
apiurl='https://localhost:44308/Employee'
  constructor(private http:HttpClient) { 

  }
  LoadDesignation(){
    return this.http.get(this.apiurl_des);
  }

  LoadAllEmployee():Observable<object>{
    return this.http.get(this.apiurl);
  }
  Employeebycode(code:any){
    return this.http.get(this.apiurl+'/'+code);
  }
  RemoveEmployeebycode(code:any){
    return this.http.delete(this.apiurl+'/'+code);
  }
  SaveEmployee(inputdata:any){
    return this.http.post(this.apiurl,inputdata);
  }

}

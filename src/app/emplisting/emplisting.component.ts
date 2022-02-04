import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-emplisting',
  templateUrl: './emplisting.component.html',
  styleUrls: ['./emplisting.component.css']
})
export class EmplistingComponent implements OnInit {
  employeedata$: any;
  contact$: any;
  users: any;
  constructor(private service: EmployeeService) {
    this.LoadAll();
  }

  ngOnInit(): void {
    
  }

  LoadAll() {
    this.service.LoadAllEmployee().subscribe(result => {
      this.employeedata$ = result;
    });
  }
  delete(code: any) {
    if (confirm("Do you want remove?")) {
      this.service.RemoveEmployeebycode(code).subscribe(result => {
        this.LoadAll();
      });
    }
  }
}

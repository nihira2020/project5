import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empadd',
  templateUrl: './empadd.component.html',
  styleUrls: ['./empadd.component.css']
})
export class EmpaddComponent implements OnInit {

  desigantiondata: any;
  saveresp: any;
  messageclass = '';
  message = '';
  EditData: any;
  Employeeid: any;
  constructor(private service: EmployeeService, private route: ActivatedRoute) {
    this.Employeeid = this.route.snapshot.paramMap.get('id');
    if (this.Employeeid != null && this.Employeeid != 0) {
this.UpdateEmployee(this.Employeeid);
    }
    this.LoadDesignation();
  }

  ngOnInit(): void {
  }

  UpdateEmployee(code: any) {
    this.service.Employeebycode(code).subscribe(result => {
      this.EditData = result;
      if (this.EditData != null) {
        this.employeeform = new FormGroup({
          code: new FormControl(this.EditData.code),
          name: new FormControl(this.EditData.name),
          email: new FormControl(this.EditData.email),
          phone: new FormControl(this.EditData.phone),
          designation: new FormControl(this.EditData.designation),
        });

      }
    });
  }

  employeeform = new FormGroup({
    code: new FormControl({ value: '', disabled: true }),
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    phone: new FormControl('', Validators.required),
    designation: new FormControl('', Validators.required),
  });

  LoadDesignation() {
    this.service.LoadDesignation().subscribe(result => {
      this.desigantiondata = result;
      console.log(this.desigantiondata);
    });

  }
  SaveEmployee() {
    if (this.employeeform.valid) {
      // console.log(this.employeeform.value);

      this.service.SaveEmployee(this.employeeform.value).subscribe(result => {
        this.saveresp = result;
        if (this.saveresp.result == 'pass') {
          this.message = "Saved Sucessfully"
          this.messageclass = 'sucess'

        } else {
          this.message = "save failed"
          this.messageclass = 'error'
        }

      });
    } else {
      this.message = "Please enter valid data"
      this.messageclass = 'error'
    }
  }

  get name() {
    return this.employeeform.get('name');
  }
  get phone() {
    return this.employeeform.get('phone');
  }
  get email() {
    return this.employeeform.get('email');
  }
  get designation() {
    return this.employeeform.get('designation');
  }

}

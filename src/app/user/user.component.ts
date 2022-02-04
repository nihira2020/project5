
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, switchMap,of } from 'rxjs';
import { DestService } from '../service/dest.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private service: DestService) { }

  emplist$: any;
  empdata$: any;
  refreshkey = new BehaviorSubject<boolean>(true);

  ngOnInit(): void {
    this.service.GetAll().subscribe(result => {
      this.emplist$ = result;
    });
    
    console.log(this.emplist$);

    this.service.GetByCode('tester').toPromise().then(response => {
      this.empdata$ = response;
      this.designationform = new FormGroup({
        code: new FormControl(this.empdata$.code),
        name: new FormControl(this.empdata$.name),
      });
    }).catch(error => {

    }).finally(() => {

    });
  }
  designationform = new FormGroup({
    code: new FormControl({ value: '', disabled: true }),
    name: new FormControl('', Validators.required),
  });

  SaveDes() {
    if (this.designationform.valid) {
      this.service.Save(this.designationform.value).subscribe(result => {
        this.refreshkey.next(!this.refreshkey);
      });
    }
  }

}

import { ThisReceiver } from '@angular/compiler';
import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'project5';
  displaymenu = false;
  displayemployee = false;
  displayuser = false;
  currentrole: any;
  menulist$: any;
  constructor(private service: LoginService, private route: Router) { }


  ngOnInit(): void {
    this.service.updatemenu.subscribe(res => {
      this.MenuDisplay();
      this.LoadMenu();
    });
    this.MenuDisplay();
    this.LoadMenu();
  }
  ngDoCheck(): void {
    if (this.route.url == '/login') {
      this.displaymenu = false
    } else {
      this.displaymenu = true
    }
  }
  MenuDisplay() {
    if (this.service.GetToken() != '') {
      this.currentrole = this.service.GetRolebyToken(this.service.GetToken());
      this.displayemployee = this.currentrole == 'admin';
      this.displayuser = (this.currentrole == 'admin' || this.currentrole == 'user')
    }
  }

  LoadMenu() {
    if (this.service.GetToken() != '') {
      this.currentrole = this.service.GetRolebyToken(this.service.GetToken());
      this.service.GetMenubyrole(this.currentrole).subscribe(result => {
        this.menulist$ = result;
      });
    }
  }
}

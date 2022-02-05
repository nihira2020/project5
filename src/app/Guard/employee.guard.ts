import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeGuard implements CanActivate {
  currentrole: any;
  constructor(private service: LoginService, private route: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.service.IsLogged()) {
      this.currentrole = this.service.GetRolebyToken(this.service.GetToken());
      if (this.currentrole == 'admin') {
        return true;
      } else {
        alert('you are not authorized to access this menu');
        this.route.navigate(['']);
        return false;
      }
    } else {
      this.route.navigate(['login']);
      return false;
    }
  }

}

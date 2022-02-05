import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EmpaddComponent } from './empadd/empadd.component';
import { EmplistingComponent } from './emplisting/emplisting.component';
import { EmployeeComponent } from './employee/employee.component';
import { AuthGuard } from './Guard/auth.guard';
import { EmployeeGuard } from './Guard/employee.guard';
import { RoleGuard } from './Guard/role.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutComponent,canActivate:[RoleGuard]},
  {path:'employee',component:EmployeeComponent,children:[
    {path:'',component:EmplistingComponent},
    {path:'create',component:EmpaddComponent},
    {path:'edit/:id',component:EmpaddComponent},
  ],canActivate:[RoleGuard]},
  {path:'user',component:UserComponent,canActivate:[RoleGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

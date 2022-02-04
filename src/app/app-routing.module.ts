import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpaddComponent } from './empadd/empadd.component';
import { EmplistingComponent } from './emplisting/emplisting.component';
import { EmployeeComponent } from './employee/employee.component';
import { AuthGuard } from './Guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'employee',component:EmployeeComponent,children:[
    {path:'',component:EmplistingComponent},
    {path:'create',component:EmpaddComponent},
    {path:'edit/:id',component:EmpaddComponent},
  ],canActivate:[AuthGuard]},
  {path:'user',component:UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

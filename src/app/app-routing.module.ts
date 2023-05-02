import { NgModule } from '@angular/core';
import { ChildActivationStart, RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { EmployeeComponent } from './employee/employee.component';
import { IntegrationComponent } from './integration/integration.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { MultipleComponent } from './multiple/multiple.component';
import { PasswordComponent } from './password/password.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component:RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'landing', component: LandingpageComponent},
  { path: 'api', component:IntegrationComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'employee', component: EmployeeComponent},
  { path: 'multiple', component: MultipleComponent},
  { path: 'child', component: ChildComponent},
  { path: 'login2', component: Login2Component},
  { path: 'password', component: PasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

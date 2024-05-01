import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { ShowproductdetailsComponent } from './showproductdetails/showproductdetails.component';
import { AuthguardService } from './services/authguard/authguard.service';

const routes: Routes = [
  { path:'', component: DashboardComponent },
  { path:'login', component: LoginComponent, canActivate:[AuthguardService] },
  { path:'register', component:RegisterComponent},
  { path: 'logout', component: LogoutComponent },
  {path: 'show/:productcode', component: ShowproductdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

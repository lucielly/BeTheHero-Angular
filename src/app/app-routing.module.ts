import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogonComponent } from './dashboard/logon/logon.component';
import { NewIncidentComponent } from './dashboard/new-incident/new-incident.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { RegisterComponent } from './dashboard/register/register.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LogonComponent },
  { path: 'createIncident', component: NewIncidentComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [
  CommonModule,
  RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

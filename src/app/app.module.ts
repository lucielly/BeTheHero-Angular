import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogonComponent } from './dashboard/logon/logon.component';
import { NewIncidentComponent } from './dashboard/new-incident/new-incident.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { RegisterComponent } from './dashboard/register/register.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LogonComponent,
    NewIncidentComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

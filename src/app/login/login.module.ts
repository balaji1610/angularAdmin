import { NgModule } from '@angular/core';


import { AppRoutingModule } from '../app-routing/app-routing.module';

import { LoginComponent } from '../admin/login/login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
   AppRoutingModule
  ]
})
export class LoginModule { }

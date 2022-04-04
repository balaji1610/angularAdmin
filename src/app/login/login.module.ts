import { NgModule } from '@angular/core';


import { AppRoutingModule } from '../app-routing/app-routing.module';

import { AdminComponent } from '../admin/admin.component';
import { LoginComponent } from '../admin/login/login.component';


@NgModule({
  declarations: [AdminComponent,LoginComponent],
  imports: [
   AppRoutingModule
  ]
})
export class LoginModule { }

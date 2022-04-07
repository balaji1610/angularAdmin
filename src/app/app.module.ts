import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './frontpage/header/header.component';
import { LoginformComponent } from './frontpage/loginform/loginform.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';


@NgModule({
  declarations: [AppComponent, HeaderComponent, LoginformComponent, DashboardComponent, SidenavComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './frontpage/header/header.component';
import { LoginformComponent } from './frontpage/loginform/loginform.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { UsersComponent } from './dashboard/users/users.component';
import { DboardComponent } from './dashboard/dboard/dboard.component';
import { AccountComponent } from './dashboard/account/account.component';
import { MessagesComponent } from './dashboard/messages/messages.component';
import { BookmarkComponent } from './dashboard/bookmark/bookmark.component';
import { FilesComponent } from './dashboard/files/files.component';


@NgModule({
  declarations: [AppComponent, HeaderComponent, LoginformComponent, DashboardComponent, SidenavComponent, UsersComponent, DboardComponent, AccountComponent, MessagesComponent, BookmarkComponent, FilesComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

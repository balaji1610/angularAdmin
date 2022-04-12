import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';

import { UsersComponent } from './dashboard/users/users.component';

import { DboardComponent } from './dashboard/dboard/dboard.component';

import { AccountComponent } from './dashboard/account/account.component';
import { MessagesComponent } from './dashboard/messages/messages.component';
import { BookmarkComponent } from './dashboard/bookmark/bookmark.component';
import { FilesComponent } from './dashboard/files/files.component';

const routes: Routes = [
{ path: 'dashboard', component: SidenavComponent,
 children:[
   { path: 'dboard', component: DboardComponent },
  { path: 'users', component: UsersComponent },

 { path: 'account', component: AccountComponent },
 { path: 'message', component: MessagesComponent },
 { path: 'bookmark', component: BookmarkComponent },
 { path: 'files', component: FilesComponent },
],},
{path:'home',component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

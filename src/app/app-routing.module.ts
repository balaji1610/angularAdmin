import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';

import { UsersComponent } from './dashboard/users/users.component';

const routes: Routes = [


 { path: 'dashboard', component: SidenavComponent,
 children:[  { path: 'users', component: UsersComponent },

],},
{path:'home',component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

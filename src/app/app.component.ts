import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {


  // constructor(private router:Router){}

  title = 'angularAdmin';

 displayData: any;
  Router: any;

  GetDataForm(data: NgForm) {
    this.displayData = data;
  }
  // visible:boolean = true;
  // admin:boolean = false;
  // login() {
  //    this.Router.navigate(["admin"]);
  //   this.visible = this.visible?false:true;

  //   this.admin = this.admin?false:true;

  // }



}

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
  // router: any;

  GetDataForm(data: NgForm) {
    this.displayData = data;
  }

  // login(){
  //   this.Router.navigate(["admin"]);

  // }
}

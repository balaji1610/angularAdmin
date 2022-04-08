import { Component ,OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public now: Date = new Date();

  constructor(private router:Router
    ){}

  title = 'angularAdmin';
  displayData: any;
  GetDataForm(data: NgForm) {
    this.displayData = data;
  };

  username="";
  usernameVisible:boolean=false;
  datetimeVisible:boolean=false;
  visible:boolean = true;
  login() {
      this.router.navigate(["dashboard"]);
      this.visible = this.visible?false:true;
      this.usernameVisible = true;
      this.datetimeVisible = true;
}



} //end


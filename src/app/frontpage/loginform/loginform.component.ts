import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor(private router:Router){}

  ngOnInit(): void {
  }
  displayData: any;
  GetDataForm(data: NgForm) {
    this.displayData = data;
  }

  visible:boolean = true;
  login() {
      this.router.navigate(["dashboard"]);
      this.visible = this.visible?false:true;
}
}

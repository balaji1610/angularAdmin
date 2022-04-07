import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayData: any;
  GetDataForm(data: NgForm) {
    this.displayData = data;
  }
}

import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private router:Router) {

   }

  ngOnInit(): void {
  }

  name = "Angular Toggle Show Hide";
  showMyContainer: boolean = false;

  status: boolean = false;
  statusLink: boolean = false;
  clickEvent() {
    this.status = !this.status;
    //this.statusLink = !this.statusLink;

    if (this.statusLink) {
      setTimeout(() => {
        this.statusLink = false;
      }, 230);
    } else {
      this.statusLink = true;
    }
  }
  tableContent:boolean = true;
  dashboardContent(){
this.tableContent = false;

  }


}//end

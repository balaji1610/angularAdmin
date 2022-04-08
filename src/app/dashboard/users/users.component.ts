import { Component, OnInit } from '@angular/core';

interface Student {

 id: Number;

  name: String;

  email: String;

  gender: String;

}



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  students: Student[] = [

    {

      id: 1,

      name: "Hardik",

      email: "hardik@gmail.com",

      gender: "male"

    },

    {

      id: 2,

      name: "Paresh",

      email: "Paresh@gmail.com",

      gender: "male"

    },

    {

      id: 3,

      name: "Kiran",

      email: "kiran@gmail.com",

      gender: "female"

    },

    {

      id: 4,

      name: "Mahesh",

      email: "mahesh@gmail.com",

      gender: "male"

    },

    {

      id: 5,

      name: "Karan",

      email: "karan@gmail.com",

      gender: "male"

    },

  ]


}

import { Component, OnInit } from '@angular/core';
interface Student {

  id: Number;

   name: String;

   email: String;

   gender: String;

  age:number;

  fatherName:string;

  motherName:string;

  address:string;



 }
@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }




  students: Student[] =  [

    {

      id: 1,

      name: "Hardik",

      email: "hardik@gmail.com",

      gender: "male",
      age: 22,


 fatherName:"xxx",

 motherName:"yyy",

 address:"xxxyyyyyy",


    },

    {

      id: 2,

      name: "Paresh",

      email: "Paresh@gmail.com",

      gender: "male",
      age: 22,


      fatherName:"xxx",

      motherName:"yyy",

      address:"xxxyyyyyy",

    },

    {

      id: 3,

      name: "Kiran",

      email: "kiran@gmail.com",

      gender: "female",
      age: 22,


      fatherName:"xxx",

      motherName:"yyy",

      address:"xxxyyyyyy",

    },

    {

      id: 4,

      name: "Mahesh",

      email: "mahesh@gmail.com",

      gender: "male",
      age: 22,


      fatherName:"xxx",

      motherName:"yyy",

      address:"xxxyyyyyy",

    },

    {

      id: 5,

      name: "Karan",

      email: "karan@gmail.com",

      gender: "male",
      age: 22,


      fatherName:"xxx",

      motherName:"yyy",

      address:"xxxyyyyyy",

    },
    {

      id: 6,

      name: "Hardik",

      email: "hardik@gmail.com",

      gender: "male",
      age: 22,


 fatherName:"xxx",

 motherName:"yyy",

 address:"xxxyyyyyy",


    },
    {

      id: 7,

      name: "Hardik",

      email: "hardik@gmail.com",

      gender: "male",
      age: 22,


 fatherName:"xxx",

 motherName:"yyy",

 address:"xxxyyyyyy",


    },
    {

      id: 8,

      name: "Hardik",

      email: "hardik@gmail.com",

      gender: "male",
      age: 22,


 fatherName:"xxx",

 motherName:"yyy",

 address:"xxxyyyyyy",


    },
    {

      id: 9,

      name: "Hardik",

      email: "hardik@gmail.com",

      gender: "male",
      age: 22,


 fatherName:"xxx",

 motherName:"yyy",

 address:"xxxyyyyyy",


    },
    {

      id: 10,

      name: "Hardik",

      email: "hardik@gmail.com",

      gender: "male",
      age: 22,


 fatherName:"xxx",

 motherName:"yyy",

 address:"xxxyyyyyy",


    },
    {

      id: 11,

      name: "Hardik",

      email: "hardik@gmail.com",

      gender: "male",
      age: 22,


 fatherName:"xxx",

 motherName:"yyy",

 address:"xxxyyyyyy",


    },
    {

      id: 12,

      name: "Hardik",

      email: "hardik@gmail.com",

      gender: "male",
      age: 22,


 fatherName:"xxx",

 motherName:"yyy",

 address:"xxxyyyyyy",


    },
    {

      id: 13,

      name: "Hardik",

      email: "hardik@gmail.com",

      gender: "male",
      age: 22,


 fatherName:"xxx",

 motherName:"yyy",

 address:"xxxyyyyyy",


    },
    {

      id: 14,

      name: "Hardik",

      email: "hardik@gmail.com",

      gender: "male",
      age: 22,


 fatherName:"xxx",

 motherName:"yyy",

 address:"xxxyyyyyy",


    },
    {

      id: 15,

      name: "Hardik",

      email: "hardik@gmail.com",

      gender: "male",
      age: 22,


 fatherName:"xxx",

 motherName:"yyy",

 address:"xxxyyyyyy",


    },
    {

      id: 16,

      name: "Hardik",

      email: "hardik@gmail.com",

      gender: "male",
      age: 22,


 fatherName:"xxx",

 motherName:"yyy",

 address:"xxxyyyyyy",
 },


  ]

}

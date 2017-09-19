import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string ="Narendra Desai";
  age:number;
  email:string;
  address:{
    street:string,
    city:string,
    state:string
  }

  constructor() { 
    console.log("Constructor ran..")
  }

  ngOnInit() {
    console.log("ngInit ran..");
    this.name="Narendra Shenvi Desai";
    this.age=55;
    this.address = {
      street:"Virnoda",
      city : "Pernem",
      state : "Goa"
    }
  }


}


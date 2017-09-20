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
  address:Address;
  hobbies : string[];
  hello : any;

  constructor() { 
    console.log("Constructor ran..")
  }

  ngOnInit() {
    console.log("ngInit ran..");
    this.name="Narendra Shenvi Desai";
    this.age=55;
    this.email = "shenvidesainarendra@gmail.com";
    this.address = {
      street:"Virnoda",
      city : "Pernem",
      state : "Goa"
    }
    this.hobbies = ["Codding","Play Cricket","Travelling"];
    this.hello = "Hello";
  }

  onClick(){
    this.name="Narendra Desai";
    this.hobbies.push("New Hobby");
    //console.log("Hello");
  }
  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }
  deleteHobby(hobby){
    for(let i=0; i<this.hobbies.length; i++){
      if(this.hobbies[i]==hobby){
        this.hobbies.splice(i, 1);
      }
    }


    console.log(hobby);
  }


}

interface Address{
    street:string,
    city:string,
    state:string
}


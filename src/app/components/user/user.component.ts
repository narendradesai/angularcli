import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
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
  posts : Post[];
  isEdit : boolean = false;

  constructor(private dataService:DataService) { 
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

    this.dataService.getPost().subscribe((post) => {
     // console.log(post);
     this.posts = post;
    });
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

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }


}

interface Address{
    street:string,
    city:string,
    state:string
}

interface Post {
  id: number,
  title : string,
  body : string,
  userId  :number
}
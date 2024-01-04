import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routing-blog';
  users : any;
  constructor(private userData:UserdataService){
    //console.warn(userData.users());   
    // this.users = userData.users();
    // this.userData.usersfromSBapplication().subscribe((data) =>
    // {
    //   console.warn("data",data);
    //   this.users = data;
    // });
  }


  getUserFormData(data : any){
      console.warn("data "+data)
      this.userData.saveUser(data).subscribe((result)=>{
        console.warn("result",result);
      });
  }
  // memberData=[
  //   {name:"shreedhar",email:"shreedhar@gmail.com"},
  //   {name:"prashant",email:"prashant@gmail.com"},
  //   {name:"vinod",email:"vinod@gmail.com"}, 
  //   {name:"mahesh",email:"mahesh@gmail.com"}

  // ];
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog-basic-form';


  loginForm = new FormGroup({
    user:new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)])
  });

  loginUser(){
    console.warn(this.loginForm.value);
  }
  
  //getter for user
  get user(){
    return this.loginForm.get('user');
  }


  //basic form 
  // userData : any = {};
  // getData(data:NgForm){
  //   console.warn(data);
  //   this.userData = data;
  // }
}

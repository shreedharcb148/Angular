import { Component, Input,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() loggedIn : boolean;
  message : string;

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(changes);
    
    const loggedInValue = changes['loggedIn']
        if(loggedInValue.currentValue == true){
          this.message = "Welcome back";
        }else{
          this.message = "please log in";
        }
  }

  //accessing properties and methods directly in parent
  name = "shreedhar";

  getShreedhar(){
    alert("hey shreedhar");
  }





  // @Input() loggedIn : boolean;
  // private _loggedIn : boolean;
  // message : string;
  // get loggedIn() : boolean {
  //   return this._loggedIn;
  // }
  // @Input() 
  // set loggedIn(val : boolean){
  //   this._loggedIn = val;
  //   if(val == true){
  //     this.message = "Welcome back";
  //   }else{
  //     this.message = "please log in";
  //   }
  // }
}

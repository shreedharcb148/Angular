import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{

  //interpolation
  title = 'template-demo';

  //property binding
  imgUrl="https://imgs.search.brave.com/ubEgpQeGtaMXab92Ju16fqToaH7uTJcKaweirUiRskY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNTU5Nnoy/QkNSOUttVDFLZVJC/ck9RYS80MDcwZmQ0/ZTJmMWExM2Y3MWMy/YzQ2YWZlYjE4ZTQx/Yy9zaHV0dGVyc3Rv/Y2tfNDUxMDc3MDQz/LWhlcm8xLmpwZz9m/aXQ9ZmlsbCZ3PTYw/MCZoPTQwMA"

  //event binding
  count=0;
  incrementCount(){
    this.count +=1;
  }

  //two way binding
  name : string;

  //split two way binding
  userName : string;
  method(val){
    this.userName = val;
    if(val =="shreedhar"){
      alert("Welcome "+val);
    }
  }

  //getters and setters
  private _customerName : string;
  get customerName() : string{
    return this._customerName;
  }
  set customerName(value : string){
    this._customerName = value;
    if(this._customerName =="shreedhar"){
      alert("Hello "+this._customerName);
    }
  }

  @ViewChild('nameRef') nameElementRef : ElementRef;
    
  ngAfterViewInit(): void {
    this.nameElementRef.nativeElement.focus();
  }

}

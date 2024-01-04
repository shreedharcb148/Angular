import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  title = 'child-demo';

  userLoggedIn = false;

  @ViewChild(ChildComponent) childComponentRef : ChildComponent;
  
  ngAfterViewInit(): void {
      this.childComponentRef.message = "message from parent component";
  }


}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'my-first-app';
  showSecret = false;
  log = [];


  onToggleDetail(){
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }
}

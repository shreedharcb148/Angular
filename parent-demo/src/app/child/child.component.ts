import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Output() methodEvent = new EventEmitter();
  name = "shreedhar";
  callParentMethod(){
   this.methodEvent.emit(this.name);
  }
}

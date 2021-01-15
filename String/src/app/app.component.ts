import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'String';
  shown :boolean= false;
  changeState(){
    this.shown=true;
  }
}

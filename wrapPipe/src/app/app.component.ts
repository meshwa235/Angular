import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wrapPipe';
  data = {
    title:"Meshwa Patel",
    student : 2.542342,
    rating: 3.4546,
    price: 300,
    releaseDate: new Date(2020,16,1),
    name: "pneumonoultramicroscopicsilicovolcanoconiosis"
  }
}

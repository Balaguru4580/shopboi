import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopboi';

  toggledata: string = "reci";

  toggle(mode: string)
  {
    this.toggledata = mode;
    console.log("Changed to " + this.toggledata);
  }
  
}

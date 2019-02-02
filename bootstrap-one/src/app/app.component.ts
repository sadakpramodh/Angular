import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 
  onfavoritechanged(eventArgs : {newValue : boolean})  {
    console.log("Favorite changed" , eventArgs);
  }
}

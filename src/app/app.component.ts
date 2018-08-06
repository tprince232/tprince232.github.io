import { Component } from '@angular/core';
//import { CarPartsComponent } from './car-parts.component';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
    <car-parts></car-parts>`
})

export class AppComponent {
  title = 'Ultra Racing';

}

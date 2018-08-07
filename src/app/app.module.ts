import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarPartsComponent } from '../car-parts/car-parts.component';

@NgModule({
  declarations: [ AppComponent,
    CarPartsComponent ],
  imports: [ BrowserModule ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}

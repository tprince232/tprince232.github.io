import { enableProdMode, Component, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { CarPartsComponent } from './car-parts/car-parts.component';


if (environment.production) {
  enableProdMode();
}


@NgModule({
  declarations: [ AppComponent, 
    CarPartsComponent ],
  imports: [ BrowserModule ],
  bootstrap: [ AppComponent ]
})

class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

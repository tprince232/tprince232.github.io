import { Component } from '@angular/core';
import { CarPart } from './car-part';
import { CARPARTS } from './mocks';

@Component({
    selector: 'car-parts',
    templateUrl: './car-parts.component.html',
    styleUrls: ['./car-parts.component.css'],
})

export class CarPartsComponent {
    carParts: CarPart[];

    ngOnInit() {
      this.carParts = CARPARTS;
    }

      totalCarParts() {
        let sum = 0;
        for (const carPart of this.carParts) {
            sum += carPart.inStock;
        }
        return sum;
      }


}



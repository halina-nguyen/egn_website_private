import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {cars} from '../../../content/cars';
import {MatDivider} from '@angular/material/divider';
import {ActivatedRoute} from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-garagedetail',
  imports: [
    NgForOf,
    NgIf,
    MatDivider,
    TranslateModule
  ],
  templateUrl: './garagedetail.component.html',
  styleUrl: './garagedetail.component.scss'
})
export class GaragedetailComponent implements OnInit {
  car = cars[0];
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit() {
    let carName = this.route.snapshot.paramMap.get('car');
    this.car = cars.find(car => car.name === carName) || cars[0];
  }
}

import { Component } from '@angular/core';
 
import {NgForOf, NgOptimizedImage} from '@angular/common';
import {Router} from '@angular/router';
import {cars} from '../../../content/cars';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-supportersseasons',
  imports: [
    NgOptimizedImage,
    NgForOf,
    TranslateModule
  ],
  templateUrl: './supportersseasons.component.html',
  styleUrl: './supportersseasons.component.scss'
})
export class SupportersseasonsComponent {

  cars = cars;

  constructor(private router: Router) {
  }

  navigateTo(link: string) {
    this.router.navigate([link]).then(r => {});
  }

}

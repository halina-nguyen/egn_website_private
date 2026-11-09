import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
 
import {Router} from '@angular/router';
import { SlideshowContentSectionComponent } from '../slideshow-content-section/slideshow-content-section.component';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-supporterslanding',
  imports: [
    SlideshowContentSectionComponent,
    TranslateModule
  ],
  templateUrl: './supporterslanding.component.html',
  styleUrl: './supporterslanding.component.scss'
})
export class SupporterslandingComponent {


  constructor(private router: Router) {
  }

  navigateTo(link: string) {
    this.router.navigate([link]).then(r => {});
  }
}

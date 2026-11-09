import { Component } from '@angular/core';
 
import {NgOptimizedImage} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import { SlideshowContentSectionComponent } from '../slideshow-content-section/slideshow-content-section.component';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-formulastudent',
  imports: [
    MatButton,
    SlideshowContentSectionComponent,
    TranslateModule
  ],
  templateUrl: './formulastudent.component.html',
  styleUrl: './formulastudent.component.scss'
})
export class FormulastudentComponent {

  constructor(private router: Router) {
  }

  navigateTo(link: string) {
    this.router.navigate([link]).then(r => {});
  }
}

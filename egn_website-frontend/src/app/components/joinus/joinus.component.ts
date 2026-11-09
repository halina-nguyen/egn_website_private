import { Component } from '@angular/core';
 
import {NgOptimizedImage} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {Router} from '@angular/router';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-joinus',
  imports: [
    NgOptimizedImage,
    MatButton,
    TranslateModule
  ],
  templateUrl: './joinus.component.html',
  styleUrl: './joinus.component.scss'
})
export class JoinusComponent {
  constructor(private router: Router) {
  }

  navigateTo(link: string) {
    this.router.navigate([link]).then(r => {});
  }

  applicationClick() {
    window.location.href = "https://forms.gle/itqD7awp5KeisDjUA";
  }
}

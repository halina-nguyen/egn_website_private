import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-mainsponsors',
  imports: [
        TranslateModule,
        RouterLink
    ],
  templateUrl: './mainsponsors.component.html',
  styleUrl: './mainsponsors.component.scss'
})
export class MainsponsorsComponent {

  current_year = new Date().getFullYear()

  constructor(private router: Router) {
  }

  navigateTo(link: string) {
    this.router.navigate([link]).then(r => {});
  }
}

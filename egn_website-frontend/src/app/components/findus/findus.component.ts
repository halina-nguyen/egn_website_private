import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-findus',
  imports: [TranslateModule],
  templateUrl: './findus.component.html',
  styleUrl: './findus.component.scss'
})
export class FindusComponent {

  constructor(private router: Router) {
  }

  navigateTo(link: string) {
    if (link.startsWith('http')) {
      window.open(link, '_blank');
      return;
    }
    this.router.navigate([link]).then(r => {});
  }
}

import {Component, OnInit} from '@angular/core';
import {aboutus_content} from '../../../content/aboutus';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-aboutus',
    imports: [
        TranslateModule
    ],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent implements OnInit {


  responsiveOptions: any[] | undefined;

  protected readonly aboutus_content = aboutus_content;

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '1199px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
      }
    ]
  }
}

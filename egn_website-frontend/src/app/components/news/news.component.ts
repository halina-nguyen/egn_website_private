import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-news',
  imports: [
    NgOptimizedImage,
    TranslateModule
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {

}

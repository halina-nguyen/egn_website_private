import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-universitypartners',
  imports: [
    NgOptimizedImage,
    TranslateModule
  ],
  templateUrl: './universitypartners.component.html',
  styleUrl: './universitypartners.component.scss'
})
export class UniversitypartnersComponent {

}

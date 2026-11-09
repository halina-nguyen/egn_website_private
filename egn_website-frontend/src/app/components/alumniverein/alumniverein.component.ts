import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';

import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-alumniverein',
  imports: [
    NgOptimizedImage,
    MatIcon,
    MatIconButton,
    TranslateModule
  ],
  templateUrl: './alumniverein.component.html',
  styleUrl: './alumniverein.component.scss'
})
export class AlumnivereinComponent {

}

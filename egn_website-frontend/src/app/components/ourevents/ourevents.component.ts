import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelDescription, MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from '@angular/material/expansion';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


import {events} from '../../../content/events';

@Component({
  selector: 'app-ourevents',
  imports: [
    NgOptimizedImage,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
    MatExpansionPanelHeader,
    NgForOf,
    NgClass,
    TranslateModule
  ],
  templateUrl: './ourevents.component.html',
  styleUrl: './ourevents.component.scss'
})
export class OureventsComponent {

  events = events;

}

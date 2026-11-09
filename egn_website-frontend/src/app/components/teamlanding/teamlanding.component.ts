import { Component, inject } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {MatAnchor, MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import { SlideshowContentSectionComponent } from '../slideshow-content-section/slideshow-content-section.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-teamlanding',
  imports: [
    NgOptimizedImage,
    MatButton,
    MatAnchor,
    RouterLink,
    SlideshowContentSectionComponent,
    TranslateModule
  ],
  templateUrl: './teamlanding.component.html',
  styleUrl: './teamlanding.component.scss'
})
export class TeamlandingComponent {

  showPrevious = false;

  // Extend or reorder as needed
  previousTeams: number[] = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012];

  // Map years to image placeholders; fall back to a generic placeholder
  private yearImages: Record<number, string> = {
    2025: 'assets/images/cars/egn25.jpg',
    2024: 'assets/images/cars/egn24.jpg',
    2023: 'assets/images/cars/egn23.jpg',
    2022: 'assets/images/cars/egn22.jpg',
    2021: 'assets/images/cars/egn20.jpg',
    2020: 'assets/images/cars/egn20.jpg',
    2019: 'assets/images/cars/egn19-ev.jpg',
    2018: 'assets/images/cars/egn18-ev.jpg',
    2017: 'assets/images/cars/egn17-ev.jpg',
    2016: 'assets/images/cars/egn16.jpg',
    2015: 'assets/images/cars/egn15.jpg',
    2014: 'assets/images/cars/egn14.jpg',
    2013: 'assets/images/cars/egn13.jpg',
    2012: 'assets/images/cars/egn12.jpg',

  };

  private translate = inject(TranslateService);

  // Echte, sprachpräfixierte URL (/de/... bzw. /en/...), damit Crawler den Link direkt folgen können
  link(path: string): string {
    return `/${this.translate.currentLang || 'de'}/${path}`;
  }

  togglePrevious() {
    this.showPrevious = !this.showPrevious;
  }

  getTeamImage(year: number): string {
    return this.yearImages[year] ?? 'assets/images/garageall.jpg';
  }
}

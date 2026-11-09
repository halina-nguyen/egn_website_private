import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {Router} from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { supporters as sponsorSeasons } from '../../../content/supporters';

@Component({
  selector: 'app-landingpage',
  imports: [
    TranslateModule
  ],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent implements OnInit {

  jahre = new Date().getFullYear() - 2011;

  sponsorLogos = (sponsorSeasons[0]?.classes ?? [])
    .flatMap(sponsorClass => sponsorClass.supporters)
    .filter(sponsor => !!sponsor.logo);

  sponsorLogoRows = Array.from({length: 3}, (_, rowIndex) => {
    const rowSize = Math.ceil(this.sponsorLogos.length / 3);
    return this.sponsorLogos.slice(rowIndex * rowSize, (rowIndex + 1) * rowSize);
  });

  showPopup = false;

  passions = [
    {
      name: "About Us",
      description: "Something",
      image: "assets/images/aboutus.png",
      link: "about-us",
    },
    {
      name: "Join our team",
      description: "Something",
      image: "assets/images/joinus.jpg",
      link: "joinus",
    },
    {
      name: "Mission e-gnition",
      description: "Something",
      image: "assets/images/missionegnition.png",
      link: "missionegnition",
    },
  ]

  responsiveOptions: any[] | undefined;

  constructor(private router: Router) {
  }

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

  navigateTo(link: string) {
    this.router.navigate([link]).then(r => {});
  }

  closePopup() {
    this.showPopup = false;
  }

  openRegistration() {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSej7aXnGF2XTOBbV247zKOHz3Ve72VgV2y8VNyPNKy4qZpikw/viewform?pli=1', '_blank', 'noopener,noreferrer');
  }
}

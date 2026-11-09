import {Component, OnInit} from '@angular/core';
import {NgForOf, NgOptimizedImage, NgIf} from "@angular/common";
import {ActivatedRoute} from '@angular/router';
import {SponsorClass, SponsorInfo, supporters, Sponsor} from '../../../content/supporters';
import {TranslateModule} from '@ngx-translate/core';
@Component({
selector: 'app-supportersdetails',
imports: [
NgOptimizedImage,
NgForOf,
NgIf
,
TranslateModule
  ],
templateUrl: './supportersdetails.component.html',
styleUrl: './supportersdetails.component.scss'
})
export class SupportersdetailsComponent implements OnInit {
season = '2024';
supporterlist: SponsorClass[] = [];
selectedSponsor: Sponsor | null = null;

constructor(private route: ActivatedRoute) {
  }

ngOnInit() {
this.season = this.route.snapshot.paramMap.get('season') || '2024';
this.supporterlist = supporters.filter(supporter => supporter.season === this.season)[0].classes || [];
  }

onSponsorClick(supporter: Sponsor) {
  if (this.selectedSponsor === supporter) {
    this.selectedSponsor = null;
  } else {
    this.selectedSponsor = supporter;
  }
}

closeModal() {
  this.selectedSponsor = null;
}
}

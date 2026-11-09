import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-slideshow-content-section',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, TranslateModule],
  templateUrl: './slideshow-content-section.component.html',
  styleUrls: ['./slideshow-content-section.component.scss']
})
export class SlideshowContentSectionComponent {
  @Input() title: string = '';
  @Input() theme: 'light' | 'dark' = 'light';
  @Input() imageAlign: 'left' | 'right' = 'left';
  @Input() images: string[] = [];

  carouselIndex: number = 0;

  previousImage() {
    if (this.images.length <= 1) return;
    this.carouselIndex = (this.carouselIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage() {
    if (this.images.length <= 1) return;
    this.carouselIndex = (this.carouselIndex + 1) % this.images.length;
  }

  getCarouselTransform(): string {
    return `translateX(-${this.carouselIndex * 100}%)`;
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { TeampageComponent, toSlug } from './teampage.component';

describe('TeampageComponent', () => {
  let component: TeampageComponent;
  let fixture: ComponentFixture<TeampageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeampageComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeampageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render exactly one h1', () => {
    const h1s = fixture.nativeElement.querySelectorAll('h1');
    expect(h1s.length).toBe(1);
  });

  it('should set a page title containing the year', () => {
    expect(document.title).toContain(component.year);
  });
});

describe('toSlug', () => {
  it('lowercases and replaces spaces', () => {
    expect(toSlug('Business Development')).toBe('business-development');
  });

  it('transliterates umlauts and ß', () => {
    expect(toSlug('Küche & Straße')).toBe('kueche-strasse');
  });

  it('trims leading and trailing separators', () => {
    expect(toSlug(' --Design-- ')).toBe('design');
  });
});
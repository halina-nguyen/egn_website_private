import {Component, inject, PLATFORM_ID, ViewChild} from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {CommonModule, DOCUMENT, isPlatformBrowser, NgOptimizedImage} from "@angular/common";
import {MainsponsorsComponent} from './components/mainsponsors/mainsponsors.component';
import {FindusComponent} from './components/findus/findus.component';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {MatTree, MatTreeNode, MatTreeNodeDef, MatTreeNodePadding, MatTreeNodeToggle} from '@angular/material/tree';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {filter} from 'rxjs';
import {SeoService} from './seo.service';

interface SidenavNode {
  name: string;
  link?: string;
  children?: SidenavNode[];
  lang?: 'de' | 'en';
}

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbar,
    MatAnchor,
    NgOptimizedImage,
    MatSidenavContainer,
    MatSidenav,
    MatIconButton,
    MatIcon,
    MatSidenavContent,
    MatTree,
    MatTreeNode,
    MatTreeNodeDef,
    MatTreeNodePadding,
    MatTreeNodeToggle,
    MainsponsorsComponent,
    FindusComponent,
    TranslateModule,
  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild('drawer', { static: false }) sidenav!: MatSidenav;

  // SSR: window/document-Scrollen gibt es nur im Browser
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private document = inject(DOCUMENT);
  private seo = inject(SeoService);

  title = 'egn_website-frontend';
  currentYear = new Date().getFullYear();
  currentLang: 'de' | 'en' = 'de';
  sidenavSource: SidenavNode[] = [];

  childrenAccessor = (node: SidenavNode) => node.children ?? [];
  hasChild = (_: number, node: SidenavNode) => !!node.children && node.children.length > 0;

  constructor(private router: Router, private translate: TranslateService) {
    // Die Sprache kommt aus der URL (/de/... oder /en/...), nicht mehr aus localStorage.
    const initialPath = this.router.url !== '/' ? this.router.url : (this.document.location?.pathname ?? '');
    const initialLanguage = initialPath.split('/').filter(Boolean)[0];
    if (initialLanguage === 'de' || initialLanguage === 'en') {
      this.currentLang = initialLanguage;
    }
    translate.setDefaultLang('en');
    translate.use(this.currentLang);
    this.document.documentElement.lang = this.currentLang;

    this.buildSidenav();
    translate.onLangChange.subscribe(() => this.buildSidenav());

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.applyUrl(event.urlAfterRedirects);

        // Scroll-to-top nach jeder Navigation: nur im Browser
        if (this.isBrowser) {
          const contentContainer = this.document.querySelector('.mat-sidenav-content') || window;
          contentContainer.scrollTo(0, 0);
        }
      });
  }

  // Liest die Sprache aus der URL und setzt Übersetzung, <html lang>, Canonical und hreflang.
  private applyUrl(url: string): void {
    const segments = url.split(/[?#]/)[0].split('/').filter(Boolean);
    const lang = segments[0];
    if (lang !== 'de' && lang !== 'en') return;

    if (lang !== this.currentLang) {
      this.currentLang = lang;
      this.translate.use(lang);
    }
    this.document.documentElement.lang = lang;
    this.buildSidenav();
    this.seo.update(lang, '/' + segments.slice(1).join('/'));
  }

  // Why is the side nav here and not in the html template?
  buildSidenav(): void {
    const t = (key: string) => this.translate.instant(key);
    const l = (path: string) => `/${this.currentLang}${path}`;
    this.sidenavSource = [
      { name: t('nav.formulastudent'), link: l('/formulastudent') },
      { name: t('nav.team'),           link: l('/team') },
      { name: t('nav.garage'),         link: l('/garage') },
      { name: t('nav.supporters'),     link: l('/supporters') },
      { name: t('nav.news'),           link: l('/news') },
      { name: t('nav.aboutus'),        link: l('/aboutus') },
    ];
  }

  // URL der aktuellen Seite in der anderen Sprache (für die Sprachumschalter-Links)
  langUrl(lang: 'de' | 'en'): string {
    return this.router.url.replace(/^\/(de|en)(?=[/?#]|$)/, `/${lang}`);
  }

}

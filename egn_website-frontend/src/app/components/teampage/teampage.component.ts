import { Component, DestroyRef, inject } from '@angular/core';
import { DOCUMENT, NgOptimizedImage } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { teams } from '../../../assets/team';

const SITE_URL = 'https://www.egnition.hamburg';
const SITE_NAME = 'e-gnition Hamburg';
const DEFAULT_YEAR = '2024';
const SUPPORTED_LANGS = ['de', 'en'];
const PLACEHOLDER_IMAGE = '/assets/images/team/placeholder.jpg';
const JSON_LD_ID = 'team-jsonld';

interface TeamMember {
  name: string;
  job: string;
  image: string;
  email?: string;
}

interface TeamDepartment {
  name: string;
  members: TeamMember[];
}

interface DepartmentView extends TeamDepartment {
  slug: string;
}

/** "Business Development" -> "business-development", "Küche" -> "kueche" */
export function toSlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

@Component({
  selector: 'app-teampage',
  imports: [NgOptimizedImage, TranslateModule, RouterLink],
  templateUrl: './teampage.component.html',
  standalone: true,
  styleUrl: './teampage.component.scss'
})
export class TeampageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  private readonly translate = inject(TranslateService);

  year = DEFAULT_YEAR;
  departments: DepartmentView[] = [];
  pagePath = '';

  /** Alle Team-Jahre aus assets/team (Keys "egn12" ... "egn26"), neueste zuerst */
  readonly years: number[] = Object.keys(teams as unknown as Record<string, unknown>)
    .map(key => /^egn(\d{2})$/.exec(key))
    .filter((m): m is RegExpExecArray => m !== null)
    .map(m => 2000 + Number(m[1]))
    .sort((a, b) => b - a);

  /** Für die Jahres-Navigation: alle Jahre außer dem aktuellen */
  get otherYears(): number[] {
    return this.years.filter(y => y !== Number(this.year));
  }

  constructor() {
    this.route.paramMap
      .pipe(takeUntilDestroyed())
      .subscribe(params => {
        this.loadTeam(params.get('year'));
        this.updatePage();
      });

    inject(DestroyRef).onDestroy(() => this.removeHeadElements());
  }

  /**
   * Der href bleibt als echter Link für Crawler erhalten, die Navigation selbst
   * läuft aber nicht über den Router: sonst unterbricht sie das sanfte Scrollen
   * und man müsste ein zweites Mal klicken.
   */
  onNavClick(event: Event, id: string): void {
    event.preventDefault();
    this.document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  link(path: string): string {
    const urlLang = this.pagePath.split('/')[1];
    const lang = SUPPORTED_LANGS.includes(urlLang) ? urlLang : (this.translate.currentLang || 'de');
    return `/${lang}/${path}`;
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (!img.src.endsWith(PLACEHOLDER_IMAGE)) {
      img.src = PLACEHOLDER_IMAGE;
    }
  }

  // ---------------------------------------------------------------- data

  private loadTeam(param: string | null): void {
    if (!param) {
      this.year = DEFAULT_YEAR;
      this.departments = [];
      return;
    }

    // URL-Param kann "egn24" oder "2024" sein
    this.year = param.startsWith('egn') ? '20' + param.substring(3) : param;
    const key = param.startsWith('20') ? 'egn' + param.substring(2) : param;

    const raw = (teams as unknown as Record<string, TeamDepartment[]>)[key] ?? [];
    this.departments = raw.map(department => ({
      ...department,
      slug: toSlug(department.name)
    }));
  }

  //----------------------------------------------------------------- E-Mail handling

  onContactClick(member: TeamMember): void {                 // E-Mail Base64-kodiert, wird erst beim Klick dekodiert (Spam-Schutz)
    if (!member.email) return;
    this.document.location.href = 'mailto:' + member.email;
  }

  // ----------------------------------------------------------------- Seitendaten / JSON-LD

  /**
   * Title, Description, Canonical, hreflang und og:url setzt zentral die Seo-Logik
   * (SeoService bzw. seo.*-Übersetzungen) - hier bleiben nur der Pfad für die Anker
   * und die seitenspezifischen strukturierten Daten.
   */
  private updatePage(): void {
    this.pagePath = this.router.url.split('#')[0].split('?')[0];
    this.setJsonLd();
  }

  private setJsonLd(): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      employee: this.departments.flatMap(department =>
        department.members.map(member => ({
          '@type': 'Person',
          name: member.name,
          jobTitle: member.job,
          image: this.absoluteUrl(member.image)
        }))
      )
    };

    let script = this.document.getElementById(JSON_LD_ID) as HTMLScriptElement | null;
    if (!script) {
      script = this.document.createElement('script');
      script.id = JSON_LD_ID;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }
    // "<" escapen, damit der Inhalt das Script-Tag nicht verlassen kann
    script.textContent = JSON.stringify(schema).replace(/</g, '\\u003c');
  }

  private absoluteUrl(path: string): string {
    return /^https?:\/\//.test(path) ? path : `${SITE_URL}/${path.replace(/^\/+/, '')}`;
  }

  private removeHeadElements(): void {
    this.document.getElementById(JSON_LD_ID)?.remove();
  }
}

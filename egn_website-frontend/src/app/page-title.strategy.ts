import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription, combineLatest, of } from 'rxjs';

/**
 * Setzt pro Route Title, Description und Open-Graph-Tags aus den Übersetzungsdateien.
 * In app.routes.ts steht pro Route:  title: 'seo.team.title',  data: { description: 'seo.team.description' }
 * Route-Parameter (z. B. :year) können in den Texten als {{year}} verwendet werden.
 */
@Injectable({ providedIn: 'root' })
export class PageTitleStrategy extends TitleStrategy {
  private title = inject(Title);
  private meta = inject(Meta);
  private translate = inject(TranslateService);
  private sub?: Subscription;

  private readonly site = 'e-gnition Hamburg e.V.';
  private readonly baseUrl = 'https://www.egnition.hamburg';
  // TODO: Bild für Link-Vorschauen (Facebook, LinkedIn, WhatsApp ...). Besser JPG/PNG als WebP, ca. 1200x630.
  private readonly ogImage = `${this.baseUrl}/assets/landing_images/landing_main.webp`;

  override updateTitle(snapshot: RouterStateSnapshot): void {
    this.sub?.unsubscribe();

    const titleKey = this.buildTitle(snapshot);
    if (!titleKey) return;

    let route: ActivatedRouteSnapshot = snapshot.root;
    while (route.firstChild) route = route.firstChild;
    const descKey: string | undefined = route.data['description'];
    const params = route.params;

    // stream() liefert den Text, sobald die Übersetzung geladen ist, und aktualisiert ihn beim Sprachwechsel
    this.sub = combineLatest([
      this.translate.stream(titleKey, params),
      descKey ? this.translate.stream(descKey, params) : of(''),
    ]).subscribe(([title, description]) =>
      this.apply(String(title), String(description), titleKey, descKey)
    );
  }

  private apply(rawTitle: string, rawDesc: string, titleKey: string, descKey?: string): void {
    const base = rawTitle === titleKey ? this.site : rawTitle; // Schlüssel fehlt -> nur Seitenname
    const fullTitle = base.includes(this.site) ? base : `${base} | ${this.site}`;
    const description = descKey && rawDesc !== descKey ? rawDesc : '';

    this.title.setTitle(fullTitle);
    this.setMeta('name', 'description', description);
    this.setMeta('property', 'og:title', fullTitle);
    this.setMeta('property', 'og:description', description);
    this.setMeta('property', 'og:type', 'website');
    this.setMeta('property', 'og:site_name', this.site);
    this.setMeta('property', 'og:image', this.ogImage);
    this.setMeta('property', 'og:locale', this.translate.currentLang === 'en' ? 'en_US' : 'de_DE');
    this.setMeta('name', 'twitter:card', 'summary_large_image');
  }

  private setMeta(attr: 'name' | 'property', key: string, content: string): void {
    const selector = `${attr}="${key}"`;
    if (!content) {
      this.meta.removeTag(selector);
    } else {
      this.meta.updateTag({ [attr]: key, content }, selector);
    }
  }
}

import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private doc = inject(DOCUMENT);
  private meta = inject(Meta);
  private readonly base = 'https://www.egnition.hamburg';

  // Seiten, die unter mehreren URLs erreichbar sind: Canonical zeigt auf die Hauptadresse.
  private readonly canonicalAlias: Record<string, string> = {
    '/foerderverein': '/supporters/alumniverein',
  };

  update(lang: 'de' | 'en', path: string): void {
    const canonicalPath = this.canonicalAlias[path] ?? path;
    this.setLink('canonical', `${this.base}/${lang}${canonicalPath}`);
    this.meta.updateTag({ property: 'og:url', content: `${this.base}/${lang}${canonicalPath}` }, 'property="og:url"');
    for (const l of ['de', 'en']) {
      this.setLink('alternate', `${this.base}/${l}${canonicalPath}`, l);
    }
    this.setLink('alternate', `${this.base}/de${canonicalPath}`, 'x-default');
  }

  private setLink(rel: string, href: string, hreflang?: string): void {
    const selector =
      `link[rel="${rel}"]` + (hreflang ? `[hreflang="${hreflang}"]` : ':not([hreflang])');
    let el = this.doc.head.querySelector<HTMLLinkElement>(selector);
    if (!el) {
      el = this.doc.createElement('link');
      el.setAttribute('rel', rel);
      if (hreflang) el.setAttribute('hreflang', hreflang);
      this.doc.head.appendChild(el);
    }
    el.setAttribute('href', href);
  }
}

// Aufruf: node scripts/generate-sitemap.mjs   (schreibt public/sitemap.xml)
import { writeFileSync } from 'node:fs';

const BASE = 'https://www.egnition.hamburg';
const LANGS = ['de', 'en'];

// TODO: gleiche Listen wie in app.routes.server.ts
const TEAM_YEARS = Array.from({ length: 15 }, (_, i) => String(2012 + i));
const CARS = Array.from({ length: 16 }, (_, i) => `egn${12 + i}`);
const SEASONS = [];

const paths = [
  'home', 'formulastudent', 'events', 'team', 'joinus', 'aboutus', 'missionegnition',
  'garage', 'supporters', 'supporters/seasons', 'supporters/alumniverein',
  'supporters/university', 'news', 'contact', 'imprint', 'dataprotection',
  ...TEAM_YEARS.map(y => `team/${y}`),
  ...CARS.map(c => `garage/${c}`),
  ...SEASONS.map(s => `supporters/${s}`),
];

const entries = paths.flatMap(path =>
  LANGS.map(lang => {
    const alternates = [
      ...LANGS.map(l => `    <xhtml:link rel="alternate" hreflang="${l}" href="${BASE}/${l}/${path}"/>`),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE}/de/${path}"/>`,
    ].join('\n');
    return `  <url>\n    <loc>${BASE}/${lang}/${path}</loc>\n${alternates}\n  </url>`;
  })
);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`;

writeFileSync('public/sitemap.xml', xml);
console.log(`${paths.length * LANGS.length} URLs geschrieben`);

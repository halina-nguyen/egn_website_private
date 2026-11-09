import { RenderMode, ServerRoute } from '@angular/ssr';
import { LANGS } from './app.routes';

// TODO: Werte an die echten Daten anpassen. Nur hier aufgelistete Seiten werden prerendert.
const TEAM_YEARS: string[] = Array.from({ length: 15 }, (_, i) => String(2012 + i)); // /team/:year
const CARS: string[] = Array.from({ length: 16 }, (_, i) => `egn${12 + i}`);          // /garage/:car
const SEASONS: string[] = [];                                                          // /supporters/:season

export const serverRoutes: ServerRoute[] = [
  ...LANGS.flatMap((lang): ServerRoute[] => [
    {
      path: `${lang}/team/:year`,
      renderMode: RenderMode.Prerender,
      getPrerenderParams: async () => TEAM_YEARS.map(year => ({ year })),
    },
    {
      path: `${lang}/garage/:car`,
      renderMode: RenderMode.Prerender,
      getPrerenderParams: async () => CARS.map(car => ({ car })),
    },
    {
      path: `${lang}/supporters/:season`,
      renderMode: RenderMode.Prerender,
      getPrerenderParams: async () => SEASONS.map(season => ({ season })),
    },
  ]),
  // alle übrigen (statischen) Seiten
  { path: '**', renderMode: RenderMode.Prerender },
];

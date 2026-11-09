import { Route, Routes, UrlSegment } from '@angular/router';
import {TeampageComponent} from './components/teampage/teampage.component';
import {LandingpageComponent} from './components/landingpage/landingpage.component';
import {FormulastudentComponent} from './components/formulastudent/formulastudent.component';
import {JoinusComponent} from './components/joinus/joinus.component';
import {OureventsComponent} from './components/ourevents/ourevents.component';
import {TeamlandingComponent} from './components/teamlanding/teamlanding.component';
import {GaragelandingComponent} from './components/garagelanding/garagelanding.component';
import {GaragedetailComponent} from './components/garagedetail/garagedetail.component';
import {SupporterslandingComponent} from './components/supporterslanding/supporterslanding.component';
import {SupportersdetailsComponent} from './components/supportersdetails/supportersdetails.component';
import {SupportersseasonsComponent} from './components/supportersseasons/supportersseasons.component';
import {NewsComponent} from './components/news/news.component';
import {AboutusComponent} from './components/aboutus/aboutus.component';
import {MissionegnitionComponent} from './components/missionegnition/missionegnition.component';
import {ContactComponent} from './components/contact/contact.component';
import {ImprintComponent} from './components/imprint/imprint.component';
import {DataprotectionComponent} from './components/dataprotection/dataprotection.component';
import {AlumnivereinComponent} from './components/alumniverein/alumniverein.component';
import {UniversitypartnersComponent} from './components/universitypartners/universitypartners.component';

export const LANGS = ['de', 'en'] as const;

// Title und Description kommen aus den Übersetzungsdateien (Schlüssel seo.<seite>.title / .description)
const seo = (page: string): Pick<Route, 'title' | 'data'> => ({
  title: `seo.${page}.title`,
  data: { description: `seo.${page}.description` },
});

// Alle Seiten der Website (ohne Sprachpräfix). Wird für jede Sprache einmal verwendet.
function pages(): Routes {
  return [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: LandingpageComponent, ...seo('home') },
    { path: 'formulastudent', component: FormulastudentComponent, ...seo('formulastudent') },
    { path: 'events', component: OureventsComponent, ...seo('events') },
    { path: 'team', component: TeamlandingComponent, ...seo('team') },
    { path: 'team/:year', component: TeampageComponent, ...seo('teampage') },
    { path: 'joinus', component: JoinusComponent, ...seo('joinus') },
    { path: 'aboutus', component: AboutusComponent, ...seo('aboutus') },
    { path: 'missionegnition', component: MissionegnitionComponent, ...seo('mission') },
    { path: 'garage', component: GaragelandingComponent, ...seo('garage') },
    { path: 'garage/:car', component: GaragedetailComponent, ...seo('garagedetail') },
    { path: 'supporters', component: SupporterslandingComponent, ...seo('supporters') },
    { path: 'supporters/seasons', component: SupportersseasonsComponent, ...seo('seasons') },
    { path: 'supporters/alumniverein', component: AlumnivereinComponent, ...seo('alumni') },
    { path: 'foerderverein', component: AlumnivereinComponent, ...seo('alumni') },
    { path: 'supporters/university', component: UniversitypartnersComponent, ...seo('university') },
    { path: 'supporters/:season', component: SupportersdetailsComponent, ...seo('supportersdetail') },
    { path: 'news', component: NewsComponent, ...seo('news') },
    { path: 'contact', component: ContactComponent, ...seo('contact') },
    { path: 'kontakt', component: ContactComponent, ...seo('contact') },
    { path: 'imprint', component: ImprintComponent, ...seo('imprint') },
    { path: 'dataprotection', component: DataprotectionComponent, ...seo('dataprotection') },
  ];
}

// Alte URLs ohne Sprachpräfix (/team, /garage/egn20, ...) leiten auf /de/... um,
// damit bestehende Links und Google-Treffer weiter funktionieren.
const legacyRedirect = ({ url }: { url: UrlSegment[] }) => {
  const first = url[0]?.path;
  if (first === 'de' || first === 'en') {
    return `/${first}/home`; // unbekannte Seite innerhalb einer Sprache
  }
  return '/de/' + url.map(s => s.path).join('/');
};

export const routes: Routes = [
  // Pro Sprache ein eigener statischer Zweig: /de/... und /en/...
  ...LANGS.map(lang => ({ path: lang, children: pages() })),
  { path: 'kontakt', redirectTo: 'de/kontakt', pathMatch: 'full' },
  { path: '', redirectTo: 'de/home', pathMatch: 'full' },
  { path: '**', redirectTo: legacyRedirect },
];

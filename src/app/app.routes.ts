import { Routes } from '@angular/router';
import { Home } from './features/auth/pages/comoponentes/home/home';
import { Nosotros } from './features/auth/pages/comoponentes/nosotros/nosotros';

export const routes: Routes =[
  { path: 'home', component: Home },
  { path: 'nosotros', component: Nosotros},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

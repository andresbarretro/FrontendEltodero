import { Routes } from '@angular/router';
import { Home } from './features/auth/pages/comoponentes/home/home';
import { Nosotros } from './features/auth/pages/comoponentes/nosotros/nosotros';
import { Header } from './shared/componentes/header/header';
import { Login } from './features/auth/pages/login/login';

export const routes: Routes =[

  { path: 'home', component: Home },
  { path: 'nosotros', component: Nosotros},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  { path: 'header', component: Header },
  { path: 'Login', component: Login },

  { path: '**', redirectTo: 'header', pathMatch: 'full' }
];

import { Routes } from '@angular/router';
import { Home } from './features/auth/pages/comoponentes/home/home';
import { Nosotros } from './features/auth/pages/comoponentes/nosotros/nosotros';
import {Login} from './features/auth/pages/login/login';
import { Moviles } from './features/auth/pages/comoponentes/moviles/moviles';
import { Computadores } from './features/auth/pages/comoponentes/computadores/computadores';
import { Hogar } from './features/auth/pages/comoponentes/hogar/hogar';
import { Pantallas } from './features/auth/pages/comoponentes/pantallas/pantallas';
import { Accesorios } from './features/auth/pages/comoponentes/accesorios/accesorios';
import { Juegos } from './features/auth/pages/comoponentes/juegos/juegos';
import { Audio } from './features/auth/pages/comoponentes/audio/audio';
import { Fotografia } from './features/auth/pages/comoponentes/fotografia/fotografia';
import { Carros } from './features/auth/pages/comoponentes/carros/carros';
import { Decoracion } from './features/auth/pages/comoponentes/decoracion/decoracion';
import { Deportes } from './features/auth/pages/comoponentes/deportes/deportes';
import { Motocicletas } from './features/auth/pages/comoponentes/motocicletas/motocicletas';
import { Servicios } from './features/auth/pages/comoponentes/servicios/servicios';

export const routes: Routes =[
  { path: 'home', component: Home },
  { path: 'nosotros', component: Nosotros},
  {path: 'login', component:Login},
  {path:'moviles',component:Moviles},
  {path:'hogar',component:Hogar},
  {path:'computadores',component:Computadores},
  {path:'pantallas',component:Pantallas},
  {path:'accesorios',component:Accesorios},
  {path:'juegos',component:Juegos},
  {path:'audio',component:Audio},
  {path:'fotografia',component:Fotografia},
  {path:'carros',component:Carros},
  {path:'decoracion',component:Decoracion},
  {path:'deportes',component:Deportes},
  {path:'motocicletas',component:Motocicletas},
  {path:'servicios',component:Servicios},
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }

];

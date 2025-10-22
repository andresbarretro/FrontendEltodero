import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./shared/componentes/header/header";
import {Carrusel} from "./shared/componentes/carrusel/carrusel/carrusel"
import { Main } from './shared/componentes/main/main';
import{Login} from  "../app/features/auth/pages/login/login";
import { Nosotros } from './features/auth/pages/comoponentes/nosotros/nosotros';
import { Home } from './features/auth/pages/comoponentes/home/home';
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
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Carrusel, Main,Login,Home,Nosotros,Moviles,Computadores,Hogar,Pantallas,Accesorios,Juegos,Audio,Fotografia,Carros,Decoracion,Deportes,Motocicletas,Servicios],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Eltodero');
}

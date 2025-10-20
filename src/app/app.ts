import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./shared/componentes/header/header";
import {Carrusel} from "./shared/componentes/carrusel/carrusel/carrusel"
import { Main } from './shared/componentes/main/main';
import{Login} from  "../app/features/auth/pages/login/login";
import { Nosotros } from './features/auth/pages/comoponentes/nosotros/nosotros';
import { Home } from './features/auth/pages/comoponentes/home/home';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header,Carrusel,Main,Home],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Eltodero');
}

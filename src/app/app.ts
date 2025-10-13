import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { header } from "./shared/componentes/header/header";
import {Carrusel} from "./shared/componentes/carrusel/carrusel/carrusel"
import { Main } from './shared/componentes/main/main';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, header,Carrusel, Main],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Eltodero');
}

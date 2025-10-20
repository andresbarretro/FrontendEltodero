import { Component } from '@angular/core';
import { Header } from '../../../../../shared/componentes/header/header';
import { Main } from '../../../../../shared/componentes/main/main';
import { Carrusel } from '../../../../../shared/componentes/carrusel/carrusel/carrusel';

@Component({
  selector: 'app-home',
  imports: [Header,Main,Carrusel],
  standalone:true,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}

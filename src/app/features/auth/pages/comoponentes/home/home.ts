import { Component, ElementRef, ViewChild } from '@angular/core';
import { Header } from '../../../../../shared/componentes/header/header';
import { Main } from '../../../../../shared/componentes/main/main';
import { Carrusel } from '../../../../../shared/componentes/carrusel/carrusel/carrusel';
import { CommonModule } from '@angular/common';

interface producto {
  imagen?: string;
  id: number;
  name: string;
  price: number;
  description:string;
}
@Component({
  selector: 'app-home',
  imports: [Header, Main, Carrusel, CommonModule],
  standalone:true,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  @ViewChild('carousel', { static: false }) carousel!: ElementRef<HTMLDivElement>;

  scrollLeft() {
    this.carousel.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
}
  loading!: boolean;
  productos!: producto[];

  ngOnInit() {
    // Simulamos carga de productos
    this.getProducts();
  }

  getProducts() {
    setTimeout(() => {
      this.productos = [
          { id: 1, imagen:"assets/images/moviles.jpg", name: 'Samsung Galaxy A05', price: 280.000, description: "Rendimiento fluido y acabado premium" },

          { id: 2, imagen:"assets/images/computadores.jpg", name: 'Pc Gamer', price: 120, description: " Potencia extrema y estilo futurista." },

          { id: 3, imagen:"assets/images/hogar.jpg", name: 'Edredon', price: 80, description: "Descanso pleno y textura premium." },

          { id: 4, imagen:"assets/images/pantalla.jpg", name: 'pantalla', price: 250, description: "Imagen nítida y montaje sencillo perfecto para el hogar." },

          { id: 5, imagen:"assets/images/accesorios.jpg", name: 'Reloj', price: 120, description: "Elegancia clásica y tecnología exacta para cualquier ocacion." },

          { id: 6, imagen:"assets/images/juegos.jpg", name: 'Consola Portatil', price: 80, description: " Diversión total y potencia en tus manos." },

          { id: 7, imagen:"assets/images/fotografia.jpg", name: 'Camara', price: 250, description: "  Captura nítida y estilo profesional para recordar ese dia especial." },

          { id: 8, imagen:"assets/images/carros.jpg", name: 'Compresor', price: 120, description: " Potencia constante y diseño resistente." },

          { id: 9, imagen:"assets/images/deportes.jpg", name: 'Fortalecedor', price: 80, description: " Reparación total y resultado firme.." },

          { id: 10, imagen:"assets/images/moviles2.jpg", name: 'Iphone 17 pro', price: 250, description: " Potencia profesional con el mejor rendimiento y diseño." },

          { id: 11, imagen:"assets/images/moviles.jpg", name: 'Teclado mecánico', price: 120, description: "esto es una prieda corta sobre la descripcion del producto" },

          { id: 12, imagen:"assets/images/moviles.jpg", name: 'Mouse ergonómico', price: 80, description: "esto es una prieda corta sobre la descripcion del producto" },
        ];
        this.loading = false;
      }, 1500);
 }



}


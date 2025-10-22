import { Component, ElementRef, ViewChild } from '@angular/core';
import { Header } from '../../../../../shared/componentes/header/header';
import { Main } from '../../../../../shared/componentes/main/main';
import { Carrusel } from '../../../../../shared/componentes/carrusel/carrusel/carrusel';
import { CommonModule } from '@angular/common';

interface producto {
  imagen: string;
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

  loading: true;
  productos: producto[] = [];

  ngOnInit() {
    // Simulamos carga de productos
    setTimeout(() => {
      this.productos = [
        { id: 1, name: 'Monitor 4K', price: 250, description: "esto es una prieda corta sobre la descripcion del producto" },
        { id: 2, name: 'Teclado mecánico', price: 120, description: "esto es una prieda corta sobre la descripcion del producto" },
        { id: 3, name: 'Mouse ergonómico', price: 80, description: "esto es una prieda corta sobre la descripcion del producto" },
        { id: 1, name: 'Monitor 4K', price: 250, description: "esto es una prieda corta sobre la descripcion del producto" },
        { id: 2, name: 'Teclado mecánico', price: 120, description: "esto es una prieda corta sobre la descripcion del producto" },
        { id: 3, name: 'Mouse ergonómico', price: 80, description: "esto es una prieda corta sobre la descripcion del producto" },
        { id: 1, name: 'Monitor 4K', price: 250, description: "esto es una prieda corta sobre la descripcion del producto" },
        { id: 2, name: 'Teclado mecánico', price: 120, description: "esto es una prieda corta sobre la descripcion del producto" },
        { id: 3, name: 'Mouse ergonómico', price: 80, description: "esto es una prieda corta sobre la descripcion del producto" },
        { id: 1, name: 'Monitor 4K', price: 250, description: "esto es una prieda corta sobre la descripcion del producto" },
        { id: 2, name: 'Teclado mecánico', price: 120, description: "esto es una prieda corta sobre la descripcion del producto" },
        { id: 3, name: 'Mouse ergonómico', price: 80, description: "esto es una prieda corta sobre la descripcion del producto" },
      ];
      this.loading = false;
    }, 1500);
  }
} }

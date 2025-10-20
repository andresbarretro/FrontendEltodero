import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  price: number;
  description:string;
}
@Component({
  selector: 'app-main',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {
  loading = true;
  products: Product[] = [];

  ngOnInit() {
    // Simulamos carga de productos
    setTimeout(() => {
      this.products = [
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
}

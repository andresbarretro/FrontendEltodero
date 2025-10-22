import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  imagen: string;
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
        {imagen:"https://www.wepc.com/wp-content/uploads/2019/05/DSC02079-1-scaled.jpg", id: 1, name: 'Monitor 4K', price: 250, description: "esto es una prieda corta sobre la descripcion del producto" },
        {imagen:"https://www.wepc.com/wp-content/uploads/2019/05/DSC02079-1-scaled.jpg", id: 2, name: 'Teclado mecánico', price: 120, description: "esto es una prieda corta sobre la descripcion del producto" },
        {imagen:"https://www.wepc.com/wp-content/uploads/2019/05/DSC02079-1-scaled.jpg", id: 3, name: 'Mouse ergonómico', price: 80, description: "esto es una prieda corta sobre la descripcion del producto" },
        {imagen:"https://www.wepc.com/wp-content/uploads/2019/05/DSC02079-1-scaled.jpg", id: 1, name: 'Monitor 4K', price: 250, description: "esto es una prieda corta sobre la descripcion del producto" },
        {imagen:"https://www.wepc.com/wp-content/uploads/2019/05/DSC02079-1-scaled.jpg", id: 2, name: 'Teclado mecánico', price: 120, description: "esto es una prieda corta sobre la descripcion del producto" },
        {imagen:"https://www.wepc.com/wp-content/uploads/2019/05/DSC02079-1-scaled.jpg", id: 3, name: 'Mouse ergonómico', price: 80, description: "esto es una prieda corta sobre la descripcion del producto" },
        {imagen:"https://www.wepc.com/wp-content/uploads/2019/05/DSC02079-1-scaled.jpg", id: 1, name: 'Monitor 4K', price: 250, description: "esto es una prieda corta sobre la descripcion del producto" },
       { imagen:"https://www.wepc.com/wp-content/uploads/2019/05/DSC02079-1-scaled.jpg", id: 2, name: 'Teclado mecánico', price: 120, description: "esto es una prieda corta sobre la descripcion del producto" },
       { imagen:"https://www.wepc.com/wp-content/uploads/2019/05/DSC02079-1-scaled.jpg", id: 3, name: 'Mouse ergonómico', price: 80, description: "esto es una prieda corta sobre la descripcion del producto" },
       { imagen:"https://www.wepc.com/wp-content/uploads/2019/05/DSC02079-1-scaled.jpg", id: 1, name: 'Monitor 4K', price: 250, description: "esto es una prieda corta sobre la descripcion del producto" },
        {imagen:"https://www.wepc.com/wp-content/uploads/2019/05/DSC02079-1-scaled.jpg", id: 2, name: 'Teclado mecánico', price: 120, description: "esto es una prieda corta sobre la descripcion del producto" },
        {imagen:"https://www.wepc.com/wp-content/uploads/2019/05/DSC02079-1-scaled.jpg", id: 3, name: 'Mouse ergonómico', price: 80, description: "esto es una prieda corta sobre la descripcion del producto" },
        {imagen:"https://www.wepc.com/wp-content/uploads/2019/05/DSC02079-1-scaled.jpg",id: 1, name: 'Monitor 4K', price: 250, description: "esto es una prieda corta sobre la descripcion del producto" },
        {imagen:"https://www.wepc.com/wp-content/uploads/2019/05/DSC02079-1-scaled.jpg", id: 2, name: 'Teclado mecánico', price: 120, description: "esto es una prieda corta sobre la descripcion del producto" },
        {imagen:"https://www.wepc.com/wp-content/uploads/2019/05/DSC02079-1-scaled.jpg", id: 3, name: 'Mouse ergonómico', price: 80, description: "esto es una prieda corta sobre la descripcion del producto" },
        {imagen:"https://i.ebayimg.com/images/g/kVAAAOSw~bFm0cXI/s-l1600.webp",id:5, name:"gorra negra", price:15, description:"esto es una prieda corta sobre la descripcion del producto" },
        {imagen:"https://i.ebayimg.com/images/g/kVAAAOSw~bFm0cXI/s-l1600.webp",id:5, name:"gorra negra", price:15, description:"esto es una prieda corta sobre la descripcion del producto" }
      ];
      this.loading = false;
    }, 1500);
  }
}

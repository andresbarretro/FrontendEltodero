/*
  Importaciones principales
  -------------------------
  Angular trabaja de manera modular:
  importamos solo lo que necesitamos para este componente.
*/
import { Component } from '@angular/core';    // Permite declarar una clase como componente de Angular.
import { CommonModule } from '@angular/common'; // Proporciona directivas comunes (como @for, @if, ngClass, etc.).


/*
  Decorador @Component
  --------------------
  Aquí definimos la configuración del componente:
  cómo se llama, dónde está su HTML, sus estilos y qué módulos necesita.
*/
@Component({
  selector: 'app-carrusel',            // Nombre con el que podremos usar el componente en el HTML (<app-carrusel></app-carrusel>)
  standalone: true,                    // Indica que este componente NO depende de un módulo (Angular moderno: standalone)
  imports: [CommonModule],             // Importa las herramientas básicas de Angular (necesarias para @for, [class], etc.)
  templateUrl: './carrusel.html',      // Ruta del archivo HTML asociado (vista del componente)
  styleUrls: ['./carrusel.scss']       // Ruta del archivo SCSS asociado (estilos del componente)
})


/*
  Clase del componente
  --------------------
  Representa la "lógica" del carrusel.
  Aquí van las propiedades (datos) y métodos (funciones) que usa la vista (HTML).
*/
export class Carrusel {

  /*
    Propiedad 'imagenes'
    --------------------
    Es un arreglo (array) que contiene las rutas de las imágenes que
    se mostrarán en el carrusel.
    El HTML recorrerá este arreglo con la directiva @for.
  */
  imagenes = [
    'assets/images/1.webp',
    'assets/images/amd-4k.jpg',
    'assets/images/onepiece.jpg',
    'assets/images/shaman-king.jpg',
    'assets/images/prueba_1.png'
  ];
}

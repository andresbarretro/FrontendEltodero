import { Login } from './../../../features/auth/pages/login/login';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [CommonModule, Login],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class header {
  mostrarLogin = false;

  abrirLogin() {
    this.mostrarLogin = true;
  }

  cerrarLogin() {
    this.mostrarLogin = false;
  }

}

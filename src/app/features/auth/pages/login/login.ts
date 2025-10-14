import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from "../../services/auth"; // ajusta el path según tu estructura
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {
  email = '';
  password = '';
  isLoggedIn = false;

  @Output() cerrarModal = new EventEmitter<void>();

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  onSubmit() {
    if (!this.email || !this.password) {
      alert("Por favor complete ambos campos");
      return;
    }

    // Simulación de login (sin API)
    const ok = this.authService.loginMock(this.email, this.password);
    if (ok) {
      this.router.navigate(['/home']);
      this.isLoggedIn = true;
      this.cerrarModal.emit(); // cerrar modal al iniciar sesión
    } else {
      alert('Credenciales inválidas (simulación).');
    }
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
  }

  cerrar(event: MouseEvent) {
    // Si el usuario hace clic fuera del modal
    if (event.target === event.currentTarget) {
      this.cerrarModal.emit();
    }
  }

  iniciarSesion() {
    console.log('Iniciando sesión...');
    this.cerrarModal.emit();
  }
}

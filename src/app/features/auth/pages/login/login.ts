import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule, FormsModule,
    RouterLink
],
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  email = '';
  password = '';

constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  onSubmit(){
    if(!this.email || !this.password){
      alert("Por favor complete ambos campos");
      return
  }
    // Simulación de login (sin API)
    const ok = this.authService.loginMock(this.email, this.password);
    if (ok) {
      this.router.navigate(['/home']);
    } else {
      alert('Credenciales inválidas (simulación).');
    }
  }

  @Output() cerrarModal = new EventEmitter<void>();

  cerrar(event: MouseEvent) {
    // Se ejecuta al hacer clic en el overlay
    if (event.target === event.currentTarget) {
      this.cerrarModal.emit();
    }
  }

  cerrarLogin() {
  this.router.navigate(['/home']);
}


  iniciarSesion() {
    console.log('Iniciando sesión...');
    this.cerrarModal.emit();
  }
}




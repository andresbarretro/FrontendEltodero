import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { AuthService } from '../../../services/auth.js';

@Component({
  selector: 'app-registro',
  imports: [RouterLink, CommonModule, FormsModule, MatButtonToggleModule],
  standalone: true,
  templateUrl: './registro.html',
  styleUrl: './registro.scss'
})
export class Registro {
  seleccionar: string = ' ';
  onSubmitVendedor() {
    console.log('Registro como Vendedor');
  }
  onSubmitComprador() {
    console.log('Registro como Comprador');
  }
  step: 'choose' | 'Comprador' | 'Vendedor' | 'admin' = 'choose';

  // user
  name = '';
  email = '';
  password = '';

  // admin
  companyName = '';
  nit = '';

  loading = false;

  constructor(private auth: AuthService, private router: Router) {}

  select(type: 'Comprador' | 'Vendedor') { this.step = type; }

  submitUser() {
    if (!this.name || !this.email || !this.password) return alert('Completa todos los campos.');
    this.loading = true;
    const ok = this.auth.register({ name: this.name, email: this.email, password: this.password, type: 'Comprador' });
    setTimeout(() => { this.loading = false; ok ? this.router.navigate(['/home']) : alert('Error al registrar'); }, 1000);
  }

  submitAdmin() {
    if (!this.companyName || !this.email || !this.password || !this.nit) return alert('Completa todos los campos de empresa.');
    this.loading = true;
    const ok = this.auth.register({ name: this.companyName, email: this.email, password: this.password, type: 'Vendedor' });
    setTimeout(() => { this.loading = false; ok ? this.router.navigate(['/home']) : alert('Error al registrar'); }, 1000);
  }
}


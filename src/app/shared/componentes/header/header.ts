import { Component, EventEmitter,Output } from '@angular/core';
import { RouterLink  } from "@angular/router";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import{ AuthService } from '../../../features/auth/services/auth';
@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  menuAbierto = false;

  constructor(private router: Router, private authService: AuthService) {}

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  cerrarMenu() {
  this.menuAbierto = false;
}



}

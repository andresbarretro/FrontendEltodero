import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


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

}


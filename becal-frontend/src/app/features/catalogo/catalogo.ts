import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtesaniasService } from '../../core/services/artesanias.service';
import { Artesania } from '../../core/models/artesania.model';

@Component({
  selector: 'app-cuevas-mapa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogo.html', 
  styleUrl: './catalogo.css'     
})
export class catalogo implements OnInit {
  artesanias: Artesania[] = [];

  constructor(private artesaniasService: ArtesaniasService) {}

  ngOnInit(): void {
    this.artesaniasService.getArtesanias().subscribe({
      next: (data) => {
        this.artesanias = data;
        console.log('Artesanías recibidas del backend:', this.artesanias);
      },
      error: (err) => {
        console.error('Error al conectar con la API:', err);
      }
    });
  }
}
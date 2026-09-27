import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Reserva } from '../../core/models/reserva.model';

@Component({
  selector: 'app-crear-reserva',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reserva.html',
  styleUrl: './reserva.css'
})
export class CrearReserva {
  @Input() tallerId!: number;
  @Input() nombreTaller: string = '';
  @Output() cerrarModal = new EventEmitter<boolean>();

  nuevaReserva: Reserva = {
    taller_id: 0,
    nombre_visitante: '',
    email_visitante: '',
    telefono_visitante: '',
    numero_personas: 1,
    fecha_reserva: '',
    hora_reserva: '10:00'
  };

  exito: boolean = false;

  enviarReserva(): void {
    this.nuevaReserva.taller_id = this.tallerId;
    
    // Aquí conectarías con tu backend en Node.js/PHP/Laravel
    console.log('Reserva enviada:', this.nuevaReserva);

    this.exito = true;
    setTimeout(() => {
      this.exito = false;
      this.cerrarModal.emit(true);
    }, 2000);
  }

  cancelar(): void {
    this.cerrarModal.emit(false);
  }
}
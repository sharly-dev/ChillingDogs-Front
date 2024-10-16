import { Component } from '@angular/core';
import { Mascota } from '../../modelo/mascota';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrl: './crear-mascota.component.scss'
})
export class CrearMascotaComponent {
  mascota: Mascota = {
    id: 0,
    nombre: '',
    raza: '',
    edad: 0,
    peso: 0,
    enfermedad: '',
    foto: '',
    estado: '',
    cliente: {
      id: 0,
      cedula: '',
      nombre: '',
      correo: '',
      celular: '',
      foto: '',
      mascotas: []
    },
    tratamientos:[]
  };
}

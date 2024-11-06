import { Component } from '@angular/core';
import {Mascota} from "../../modelo/mascota";
import {MascotaService} from "../../service/mascota.service";
import {Router} from "@angular/router";
import {switchMap} from "rxjs";
import {PerfilService} from "../../service/perfil.service";

@Component({
  selector: 'app-tabla-mascota',
  templateUrl: './tabla-mascota.component.html',
  styleUrl: './tabla-mascota.component.scss'
})
export class TablaMascotaComponent {
  mascotas!: Mascota[];

  constructor(
    private mascotaService: MascotaService,
    private router: Router,
    private perfilService: PerfilService) {}

  ngOnInit() {
    // Suscribirse a perfilService y cuando haya respuesta, obtener la lista de mascotas
    // En un solo suscribe utilizando pipe
    this.perfilService.perfilInfo$.pipe(
      switchMap(perfil => {
        if (perfil.rol !== 'VETERINARIO' && perfil.rol !== 'ADMIN') {
          this.redirectNotAuthorized();
        }
        return this.mascotaService.findAll();
      })
    ).subscribe(mascotas => {
      this.mascotas = mascotas;
    });
  }

  recargarMascotas(filtro: {nombre: string, filter: string}) {
    // Trae todas las mascotas de la BD
    console.log(filtro);
    if(filtro.nombre != undefined) {
      this.mascotaService.findAll().subscribe(mascotas => {
        this.mascotas = mascotas.filter(mascota => mascota.nombre.toLowerCase().includes(filtro.nombre.toLowerCase() || ''));
        if(filtro.filter != "") {
          this.filtrarMascotas(filtro.filter);
        }
      });
    }
    else{
      this.mascotaService.findAll().subscribe(mascotas => {
        this.mascotas = mascotas
        if(filtro.filter != "") {
          this.filtrarMascotas(filtro.filter);
        }
      });
    }
  }

  eliminarMascota(id: number) {
    this.mascotaService.deleteById(id);
    // Eliminar la mascota de la lista
    this.mascotas.splice(this.mascotas.findIndex(mascota => mascota.id === id), 1);
  }

  filtrarMascotas(filter: string): void {
    switch (filter) {
      case "Activo":
        this.mascotas = this.mascotas.filter(mascota => mascota.estado === "Activo");
        break;
      case "Inactivo":
        this.mascotas = this.mascotas.filter(mascota => mascota.estado === "Inactivo");
        break;
    }
  }

  goBack() {
    // Vuelve pa atrás
    window.history.back();
  }

  redirectNotAuthorized() {
    this.router.navigate(['**']);
  }
}


import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tratamiento} from "../modelo/tratamiento";
import {TratamientoDTO} from "../modelo/tratamientoDTO";

@Injectable({
  providedIn: 'root'
})
export class TratamientoService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Tratamiento[]> {
    return this.http.get<Tratamiento[]>('http://localhost:8099/tratamientos');
  }

  findByMascotaId(id: number): Observable<Tratamiento[]> {
    return this.http.get<Tratamiento[]>(`http://localhost:8099/tratamientos/mascota/${id}`);
  }

  findByVeterinarioId(id: number): Observable<Tratamiento[]> {
    return this.http.get<Tratamiento[]>(`http://localhost:8099/tratamientos/veterinario/${id}`);
  }

  add(tratamientoDTO: TratamientoDTO): Observable<Tratamiento>{
    return this.http.post<Tratamiento>('http://localhost:8099/tratamientos', tratamientoDTO);
  }

  update(tratamientoDTO: TratamientoDTO): Observable<Tratamiento> {
    return this.http.put<Tratamiento>(`http://localhost:8099/tratamientos`, tratamientoDTO);
  }

  deleteById(id: number): Observable<string> {
    return this.http.delete(`http://localhost:8099/tratamientos/${id}`, { responseType: 'text' });
  }
}

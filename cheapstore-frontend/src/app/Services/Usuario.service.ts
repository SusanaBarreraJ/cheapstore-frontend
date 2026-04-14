import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Usuario } from '../Models/Usuario.model';

@Injectable({ providedIn: 'root' })
export class UsuarioService {

  private apiUrl = `${environment.apiUrl}/usuarios`;

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  getUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
  }

  createUsuario(data: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, data);
  }

  updateUsuario(id: number, data: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apiUrl}/${id}`, data);
  }

  deleteUsuario(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
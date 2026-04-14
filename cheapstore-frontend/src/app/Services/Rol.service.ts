import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Rol } from '../Models/Rol.model';

@Injectable({ providedIn: 'root' })
export class RolService {

  private apiUrl = `${environment.apiUrl}/roles`;

  constructor(private http: HttpClient) {}

  getRoles(): Observable<Rol[]> {
    return this.http.get<Rol[]>(this.apiUrl);
  }

  getRol(id: number): Observable<Rol> {
    return this.http.get<Rol>(`${this.apiUrl}/${id}`);
  }

  createRol(data: Rol): Observable<Rol> {
    return this.http.post<Rol>(this.apiUrl, data);
  }

  updateRol(id: number, data: Rol): Observable<Rol> {
    return this.http.put<Rol>(`${this.apiUrl}/${id}`, data);
  }

  deleteRol(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
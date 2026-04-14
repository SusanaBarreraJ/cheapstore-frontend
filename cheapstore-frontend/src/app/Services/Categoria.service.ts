import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Categoria } from '../Models/Categoria.model';

@Injectable({ providedIn: 'root' })
export class CategoriaService {

  private apiUrl = `${environment.apiUrl}/categorias`;

  constructor(private http: HttpClient) {}

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiUrl);
  }

  getCategoria(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.apiUrl}/${id}`);
  }

  createCategoria(data: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.apiUrl, data);
  }

  updateCategoria(id: number, data: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(`${this.apiUrl}/${id}`, data);
  }

  deleteCategoria(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
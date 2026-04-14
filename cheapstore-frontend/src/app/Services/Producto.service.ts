import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Producto } from '../Models/Producto.model';

@Injectable({ providedIn: 'root' })
export class ProductoService {

  private apiUrl = `${environment.apiUrl}/productos`;

  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  getProducto(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}/${id}`);
  }

  createProducto(data: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.apiUrl, data);
  }

  updateProducto(id: number, data: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.apiUrl}/${id}`, data);
  }

  deleteProducto(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
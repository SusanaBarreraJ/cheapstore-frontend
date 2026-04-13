import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../Models/Producto.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl = `${environment.apiUrl}/productos`;

  constructor(private http: HttpClient) {}

  // GET TODOS
  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  // GET POR ID
  getProducto(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}/${id}`);
  }

  // CREATE
  createProducto(data: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.apiUrl, data);
  }

  // UPDATE
  updateProducto(id: number, data: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.apiUrl}/${id}`, data);
  }

  // DELETE
  deleteProducto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
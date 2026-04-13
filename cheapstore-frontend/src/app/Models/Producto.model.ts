import { Categoria } from './Categoria.model';

export interface Producto {
  id: number;
  nombre: string;
  descripcion?: string;
  precio: number;
  stock: number;
  categoria_id: number;
  categoria?: Categoria;
}
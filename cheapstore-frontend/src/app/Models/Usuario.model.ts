import { Rol } from './Rol.model';

export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  password?: string;
  rol_id: number;
  rol?: Rol;
}
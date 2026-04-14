import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  nombre = '';
  email = '';
  password = '';
  msg = '';

  constructor(private http: HttpClient) {}

  registrar() {
    const data = {
      nombre: this.nombre,
      email: this.email,
      passwordHash: this.password
    };

    this.http.post('http://127.0.0.1:8080/usuarios', data)
      .subscribe({
        next: () => {
          this.msg = 'Usuario registrado correctamente';
        },
        error: () => {
          this.msg = 'Error al registrar';
        }
      });
  }
}
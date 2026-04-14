import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = '';
  password = '';
  showPassword = false;
  errorMsg = '';
  errorTimeout: any;

  constructor(private auth: AuthService, private router: Router, private cdr: ChangeDetectorRef) {}

  login() {
    this.errorMsg = '';
    if (!this.email || !this.password) {
      this.errorMsg = 'Completa todos los campos';
      return;
    }

    this.auth.login({
      email: this.email,
      password: this.password
    }).subscribe({
      next: (res: any) => {
        this.auth.saveToken(res.token);
        this.router.navigate(['/productos']);
      },
      error: (err) => {
        this.errorMsg = err.error?.error || 'Credenciales incorrectas';
        this.cdr.detectChanges();
      }
    });
  }
}

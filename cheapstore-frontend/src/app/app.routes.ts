import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
//import { ProductosComponent } from './Pages/productos/productos.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  }/*,
  {
    path: 'productos',
    component: ProductosComponent
  }*/
];
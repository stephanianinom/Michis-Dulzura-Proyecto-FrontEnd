import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Productos } from './pages/productos/productos';
import { Detalle } from './pages/detalle/detalle';
import { Contacto } from './pages/contacto/contacto';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'productos', component: Productos },
  { path: 'detalle/:id', component: Detalle },
  { path: 'contacto', component: Contacto },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

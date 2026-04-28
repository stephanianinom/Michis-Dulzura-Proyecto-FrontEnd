import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { FavoritesModal } from './components/favorites-modal/favorites-modal';
import { Home } from './pages/home/home';
import { Productos } from './pages/productos/productos';
import { Detalle } from './pages/detalle/detalle';
import { Contacto } from './pages/contacto/contacto';

@NgModule({
  declarations: [
    App, 
    Navbar, 
    Footer, 
    FavoritesModal,
    Home,
    Productos,
    Detalle,
    Contacto
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}

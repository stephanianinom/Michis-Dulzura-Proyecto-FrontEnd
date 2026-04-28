import { Component } from '@angular/core';
import { FavoritesService } from '../../services/favorites';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(public favoritesService: FavoritesService) {}
}

import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../../services/product';
import { FavoritesService } from '../../services/favorites';

@Component({
  selector: 'app-productos',
  standalone: false,
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    public favoritesService: FavoritesService
  ) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  toggleFavorite(id: number) {
    this.favoritesService.toggleFavorite(id);
  }

  isFav(id: number): boolean {
    return this.favoritesService.isFavorite(id);
  }
}

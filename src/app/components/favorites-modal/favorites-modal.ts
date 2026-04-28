import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites';
import { ProductService, Product } from '../../services/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-favorites-modal',
  standalone: false,
  templateUrl: './favorites-modal.html',
  styleUrl: './favorites-modal.css',
})
export class FavoritesModal implements OnInit {
  isModalOpen$!: Observable<boolean>;
  favoriteProducts$!: Observable<Product[]>;

  constructor(
    public favoritesService: FavoritesService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.isModalOpen$ = this.favoritesService.isModalOpen$;
    this.favoriteProducts$ = this.favoritesService.favorites$.pipe(
      map(favIds => favIds
        .map(id => this.productService.getProductById(id))
        .filter((p): p is Product => p !== undefined)
      )
    );
  }

  close() {
    this.favoritesService.closeModal();
  }

  removeFav(id: number) {
    this.favoritesService.toggleFavorite(id);
  }

  clearFavs() {
    this.favoritesService.clearFavorites();
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService, Product } from '../../services/product';
import { FavoritesService } from '../../services/favorites';

@Component({
  selector: 'app-detalle',
  standalone: false,
  templateUrl: './detalle.html',
  styleUrl: './detalle.css'
})
export class Detalle implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    public favoritesService: FavoritesService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.product = this.productService.getProductById(id);
      if (!this.product) {
        this.router.navigate(['/productos']);
      }
    });
  }

  toggleFavorite() {
    if (this.product) {
      this.favoritesService.toggleFavorite(this.product.id);
    }
  }

  isFav(): boolean {
    if (this.product) {
      return this.favoritesService.isFavorite(this.product.id);
    }
    return false;
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favorites: number[] = [];
  private favoritesSubject = new BehaviorSubject<number[]>([]);
  public favorites$ = this.favoritesSubject.asObservable();
  
  private isModalOpenSubject = new BehaviorSubject<boolean>(false);
  public isModalOpen$ = this.isModalOpenSubject.asObservable();

  constructor() {
    this.loadFavorites();
  }

  private loadFavorites() {
    const saved = localStorage.getItem('michis_favorites');
    if (saved) {
      this.favorites = JSON.parse(saved);
      this.favoritesSubject.next(this.favorites);
    }
  }

  private saveFavorites() {
    localStorage.setItem('michis_favorites', JSON.stringify(this.favorites));
    this.favoritesSubject.next(this.favorites);
  }

  toggleFavorite(productId: number) {
    const index = this.favorites.indexOf(productId);
    if (index === -1) {
      this.favorites.push(productId);
    } else {
      this.favorites.splice(index, 1);
    }
    this.saveFavorites();
  }

  isFavorite(productId: number): boolean {
    return this.favorites.includes(productId);
  }

  clearFavorites() {
    this.favorites = [];
    this.saveFavorites();
  }
  
  openModal() {
    this.isModalOpenSubject.next(true);
  }
  
  closeModal() {
    this.isModalOpenSubject.next(false);
  }
}

import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  title: string;
  price: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsData: Product[] = [
    { id: 1, title: "Pastel Arcoiris Fantasia", price: "$65.000", image: "assets/imagenes/05d437b5f41575284145be8bd61f0592.jpg" },
    { id: 2, title: "Cuadro Michi Personalizado", price: "$45.000", image: "assets/imagenes/62dab9150da19ee14945594c12471ab2.jpg" },
    { id: 3, title: "Pastel Cumpleaños Rin Rin Renacuajo", price: "$70.000", image: "assets/imagenes/06a155c0d472714dde7f9fe5adec1b9d.jpg" },
    { id: 4, title: "Arte Michi sacando Lenguita", price: "$65.000", image: "assets/imagenes/4cc745c8f48470ddb47804efb36b9af8.jpg" },
    { id: 5, title: "Cuadro Michi Payaso", price: "$55.000", image: "assets/imagenes/673641fa6765c831351e0ab7c4e52c32.jpg" },
    { id: 6, title: "Cuadro Michi Personalizado 2", price: "$45.000", image: "assets/imagenes/714f51d545f4642e9b30bae5f4f75ac4.jpg" },
    { id: 7, title: "Pastel Cerecita", price: "$95.000", image: "assets/imagenes/7d7e705a8e508f32b1100fccca2c6dc1.jpg" },
    { id: 8, title: "MichiCup x6", price: "$70.000", image: "assets/imagenes/b4dc8721c6e928aef71f9cb979d9bd69.jpg" },
    { id: 9, title: "Pastel Huellitas y Michis", price: "$80.000", image: "assets/imagenes/d6aefe1ed9d89292d40ae2426777d7c4.jpg" },
    { id: 10, title: "Pastel Michi Cumpleaños", price: "$85.000", image: "assets/imagenes/f421dc723bcd8b14d0da1a04c6ef11b3.jpg" },
    { id: 11, title: "Retrato Personalizado Mascota", price: "$40.000", image: "assets/imagenes/0e432cb4e5097dcf669ed5a9df82e7fe.jpg" }
  ];

  getProducts(): Product[] {
    return this.productsData;
  }
  
  getProductById(id: number): Product | undefined {
    return this.productsData.find(p => p.id === id);
  }
}

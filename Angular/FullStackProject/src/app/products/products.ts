import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products {

  myProducts: any[] = [];

  constructor(private http: HttpClient) {
    this.getProduct();
  }

  getProduct() {
    this.http
      .get('https://localhost:7158/api/My')
      .subscribe((result: any) => {
        this.myProducts = result;

        console.log('Bikes:', result);
        console.log('myProducts:', this.myProducts);
      });
  }

  DeletProduct(item: any) {

    this.http
      .delete('https://localhost:7158/api/My?id=' + item.id)
      .subscribe((result: any) => {

        alert('Successfully deleted');

        this.getProduct();

        console.log(result);
      });
  }
}
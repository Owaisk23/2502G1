import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {

  myProducts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.http
      .get<any[]>('https://localhost:7158/api/My')
      .subscribe({
        next: (result) => {
          console.log('API RESULT:', result);
          this.myProducts = result;
        },
        error: (error) => {
          console.error('API ERROR:', error);
        }
      });
  }

  DeletProduct(item: any) {
    this.http
      .delete('https://localhost:7158/api/My?id=' + item.id)
      .subscribe({
        next: () => {
          alert('Successfully deleted');
          this.getProduct();
        },
        error: (error) => {
          console.error('Delete error:', error);
        }
      });
  }
}
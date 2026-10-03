import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editproduct',
  imports: [FormsModule],
  templateUrl: './editproduct.html',
  styleUrl: './editproduct.css'
})
export class Editproduct implements OnInit {

  id: any;

  product = {
    name: '',
    brand: '',
    price: 0
  };

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');

    this.getProduct();
  }

  getProduct() {

    this.http
      .get<any>('https://localhost:7158/api/My/' + this.id)
      .subscribe({
        next: (result) => {

          console.log('Product:', result);

          this.product = {
            name: result.name,
            brand: result.brand,
            price: result.price
          };

        },
        error: (error) => {
          console.error('Error loading product:', error);
        }
      });
  }

  updateProduct() {

    this.http
      .put(
        'https://localhost:7158/api/My/' + this.id,
        this.product
      )
      .subscribe({
        next: (result) => {

          console.log('Updated:', result);

          alert('Product updated successfully!');

          this.router.navigate(['/']);

        },
        error: (error) => {

          console.error('Update error:', error);

        }
      });
  }
}
import { Component } from '@angular/core';
import { ProductsPageComponent } from '../products-page.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from "../product-details/product-details.component";

@Component({
    selector: 'app-product-page',
    standalone: true,
    templateUrl: './product-page.component.html',
    styleUrl: './product-page.component.scss',
    imports: [ProductDetailsComponent, RouterModule]
})
export class ProductPageComponent {

  films = new ProductsPageComponent().films;
  albums = new ProductsPageComponent().albums;

  products = this.films.concat(this.albums);
  product!:any;

  constructor(private router: Router, private route:ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.product = this.products.find((product) => product.id == id);
    }
  }

}

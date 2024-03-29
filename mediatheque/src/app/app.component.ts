import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./commons/nav-bar/nav-bar.component";
import { FooterComponent } from "./commons/footer/footer.component";
import { ProductListComponent } from "./pages/products-page/product-list/product-list.component";
import { ProductsPageComponent } from "./pages/products-page/products-page.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavBarComponent, FooterComponent, ProductListComponent, ProductsPageComponent]
})
export class AppComponent {
  title = 'mediatheque';
}

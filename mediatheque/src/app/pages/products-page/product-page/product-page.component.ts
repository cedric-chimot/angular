import { Component } from '@angular/core';
import { ProductsPageComponent } from '../products-page.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from "../product-details/product-details.component";
import Film from '../../../models/film.model';
import Album from '../../../models/album.model';
import { AlbumService } from '../../../services/album-service.service';
import { FilmService } from '../../../services/film-service.service';

@Component({
    selector: 'app-product-page',
    standalone: true,
    templateUrl: './product-page.component.html',
    styleUrl: './product-page.component.scss',
    imports: [ProductDetailsComponent, RouterModule]
})
export class ProductPageComponent {

  product!: Film | Album;

  constructor(
    private router: Router,
    private route:ActivatedRoute,
    private filmService: FilmService,
    private albumService: AlbumService
  ) {}

  private subscribeFilm(id: number):void {
    this.filmService.getFilm(id).subscribe({
      next: (film) => this.product = film,
      error: (err) => console.error('Erreur au chargement',err)
    });
  }

  private subscribeAlbum(id: number):void {
    this.albumService.getAlbum(id).subscribe({
      next: (album) => this.product = album,
      error: (err) => console.error('Erreur au chargement',err)
    });
  }

  private setSubscribe(type: string | null, id: string | null): void {
    if(type === 'films' && id) {
      this.subscribeFilm(+id);
    } else if (type === 'albums' && id) {
      this.subscribeAlbum(+id);
    } else {
      this.router.navigate(['/not-found']);
    }
  }

  ngOnInit(): void {
    const type = this.route.snapshot.paramMap.get('type');
    const id = this.route.snapshot.paramMap.get('id');
    this.setSubscribe(type, id);
  }

}

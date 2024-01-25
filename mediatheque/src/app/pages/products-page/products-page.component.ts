import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { ProductListComponent } from "./product-list/product-list.component";
import Album from '../../models/album.model';
import Film from '../../models/film.model';
import { FilmService } from '../../services/film-service.service';
import { AlbumService } from '../../services/album-service.service';

@Component({
    selector: 'app-products-page',
    standalone: true,
    templateUrl: './products-page.component.html',
    styleUrl: './products-page.component.scss',
    imports: [MatCardModule, ProductListComponent]
})
export class ProductsPageComponent {

  films: Film[] = [ ]

  albums: Album[] = []

  constructor(private filmService: FilmService, private albumService: AlbumService) {}

  ngOnInit(): void {
    this.filmService.getFilms().subscribe((films) => {this.films = films;});
    this.albumService.getAlbums().subscribe((albums) => {this.albums = albums;});
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Album from '../models/album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private apiUrl = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {}

  getFilms(): Observable<Album[]>{
    return this.httpClient.get<Album[]>(`${this.apiUrl}/albums`);
  }

  getFilm(id: number): Observable<Album>{
    return this.httpClient.get<Album>(`${this.apiUrl}/films/${id}`);
  }

  createFilm(album: Album): Observable<Album>{
    return this.httpClient.post<Album>(`${this.apiUrl}/albums`, album);
  }

  updateFilm(album: Album): Observable<Album>{
    return this.httpClient.put<Album>(`${this.apiUrl}/albums/${album.id}`, album);
  }

  deleteFilm(id: number): Observable<Album>{
    return this.httpClient.delete<Album>(`${this.apiUrl}/albums/${id}`);
  }
}
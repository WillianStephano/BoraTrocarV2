import { Injectable } from '@angular/core';
import { Anuncio } from '../model/anuncio';
import { HttpClient } from '@angular/common/http';
import { delay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnunciosService {
  //Caminho para API como readonly para evitar merda.
  private readonly URL = 'http://localhost:8090/livro/all';

  constructor(private httpClient: HttpClient) {}

  listaTudo() {
    return this.httpClient
      .get<Anuncio[]>(this.URL)
      .pipe(tap((postagens) => console.log(postagens)));
  }
}

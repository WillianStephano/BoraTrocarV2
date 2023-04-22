import { Injectable } from '@angular/core';
import { Anuncio } from '../model/anuncio';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';
//import { tap } from 'rxjs'; para debugar.

@Injectable({
  providedIn: 'root',
})
export class AnunciosService {
  //Caminho para API como readonly para evitar merda.
  private readonly URL = '../../../assets/anuncios.json';

  constructor(private httpClient: HttpClient) {}

  listaTudo() {
    return this.httpClient.get<Anuncio[]>(this.URL).pipe(delay(1));

    // Pipe para dar um log no json que esta vindo da "API"
    //.pipe(tap((postagens) => console.log(postagens)));
  }
}

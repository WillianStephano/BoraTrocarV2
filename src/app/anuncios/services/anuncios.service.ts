import { Injectable, Output } from '@angular/core';
import { Anuncio } from '../model/anuncio';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { pipe, tap } from 'rxjs';
import { TokenService } from 'src/app/login/login/token/token.service';

@Injectable({
  providedIn: 'root',
})
export class AnunciosService {
  //Caminho para API como readonly para evitar merda.
  private readonly URL = 'http://localhost:8090/';
  id!: number;

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  listaTudo() {
    return this.httpClient.get<Anuncio[]>(this.URL + 'livro/all');
    //.pipe(tap((postagens) => console.log(postagens)));
  }

  pegarAnuncio(id: number) {
    const headers = new HttpHeaders({
      Authorization: `${this.tokenService.getToken()}`,
    });

    return this.httpClient.get<Anuncio>(this.URL + `livro/buscar_livro/${id}`, {
      headers,
    });
    //.subscribe();
  }
}

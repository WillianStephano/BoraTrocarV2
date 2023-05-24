import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CadastroAnunciosService {
  private readonly API = `http://localhost:8090`;

  constructor(private http: HttpClient, ) {}

  insere(tituloLivro: string, autorLivro: string, descricaoLivro: string) {
    const headers = new Headers;
    return this.http.post(this.API + `/livro/cadastrar`, {
      tituloLivro,
      autorLivro,
      descricaoLivro,
    });
  }
}

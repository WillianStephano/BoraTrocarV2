import { TokenService } from './../../../login/login/token/token.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CadastroAnunciosService {
  private readonly API = `http://localhost:8090`;

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  insere(tituloLivro: string, autorLivro: string, descricaoLivro: string) {
    const headers = new Headers();
    return this.http.post(this.API + `/livro/cadastrar`, {
      headers: {
        Authorization: `${this.tokenService.getToken()}`,
      },
      tituloLivro,
      autorLivro,
      descricaoLivro,
    });
  }
}

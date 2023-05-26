import { TokenService } from './../../../login/login/token/token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CadastroAnunciosService {
  private readonly API = `http://localhost:8090`;

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  insere(
    isbn: string,
    nomeLivro: string,
    autor: string,
    condicao: string,
    categoria: string,
    descricao: string
  ) {
    const headers = new HttpHeaders({
      Authorization: `${this.tokenService.getToken()}`,
    });

    return this.http.post(
      this.API + `/livro/cadastrar`,
      {
        isbn,
        nomeLivro,
        autor,
        condicao,
        categoria,
        descricao,
      },
      { headers }
    );
  }
}

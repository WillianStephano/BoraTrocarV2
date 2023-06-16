import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from 'src/app/login/login/token/token.service';

@Injectable({
  providedIn: 'root',
})
export class AnunciosAlterarService {
  private readonly API = `http://localhost:8090`;
  constructor(private tokenService: TokenService, private http: HttpClient) {}

  altera(
    idLivro: number,
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

    return this.http.put(
      this.API + `/livro/alterar/${idLivro}`,
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

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly API = `http://localhost:3000`;

  constructor(private http: HttpClient) {}

  autentica(userName: string, password: string) {
    return this.http
      .post(
        this.API + '/user/login',{ userName, password },
        { observe: 'response' } //ta aqui para ser usado no esquema do token abaixo
      )
      .pipe(
        tap((res) => {
          const tokenDeAutenticacao = res.headers.get('x-access-token');
          window.localStorage.setItem(
            'tokenDeAutenticacao', tokenDeAutenticacao!); //tem que ver se o ! nao vai dar merda
          console.log(tokenDeAutenticacao);
        })
      );
    //pega o header do response e extrai dele o token de autenticação do usuario
  }
}

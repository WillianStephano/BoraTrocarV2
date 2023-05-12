import { TokenService } from './../login/token/token.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly API = `http://localhost:8090`;

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  autentica(email: string, senha: string) {
    return this.http
      .post(
        this.API + '/usuario/logar',
        { email, senha },
        { observe: 'response' } //ta aqui para ser usado no esquema do token abaixo
      )
      .pipe(
        tap((res) => {
          const tokenDeAutenticacao = res.body;
          this.tokenService.setToken(tokenDeAutenticacao);
          window.localStorage.setItem('emailUser', email);
        })
      );
    //pega o header do response e extrai dele o token de autenticação do usuario
  }

  estaAutenticado(): boolean {
    const tokenDeAutenticacao = this.tokenService.getToken();
    return tokenDeAutenticacao !== null;
  }
}

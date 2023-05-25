import { TokenService } from './../login/token/token.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

export interface MeuObjeto {
  token: string;
  // outras propriedades do objeto, se houver
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly API = `http://localhost:8090`;

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  autentica(email: string, senha: string) {
    return this.http
      .post<MeuObjeto>(
        this.API + '/usuario/logar',
        { email, senha },
        { observe: 'response' } //ta aqui para ser usado no esquema do token abaixo
      )
      .pipe(
        tap((res) => {
          const tokenDeAutenticacao: any = res.body;

          window.localStorage.setItem('emailUser', email);
          this.tokenService.setToken(tokenDeAutenticacao.token);

        /*
          MANO ESSA GAMBIARRA PARA TRATAR O TOKEN PARA STRING KKKKKKKK
          let tokenString: any = JSON.stringify(tokenDeAutenticacao);
          tokenString = tokenString.split(':');
          this.tokenService.setToken(tokenString[1]);
          console.log(tokenString[1]);
        */
        })
      );
  }

  estaAutenticado(): boolean {
    if (this.tokenService.getToken() !== null) {
      return true;
    }
    return false;
  }

  public deslogar() {
    this.tokenService.removeToken();
  }
}

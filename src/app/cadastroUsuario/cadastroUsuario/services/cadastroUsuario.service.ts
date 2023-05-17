import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CadastroUsuarioService {
  private readonly API = `http://localhost:8090`;

  constructor(private http: HttpClient) {}

  insereNoBanco(
    nomeUsuario: string,
    email: string,
    nickname: string,
    senha: string,
    dataNascimento: string
  ) {
    return this.http.post(this.API + `/usuario/cadastrar`, {
      nomeUsuario,
      email,
      nickname,
      senha,
      dataNascimento,
    });
  }
}

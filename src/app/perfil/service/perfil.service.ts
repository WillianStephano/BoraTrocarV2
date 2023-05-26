import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from 'src/app/login/login/token/token.service';
import { Perfil } from '../model/Perfil';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PerfilService {
  private readonly URL = 'http://localhost:8090';

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  listaInfoPerfil() {
    const headers = new HttpHeaders({
      Authorization: `${this.tokenService.getToken()}`,
    });

    return this.http
      .get<Perfil>(this.URL + `/usuario/perfil`, { headers })
      .pipe(tap((perfil) => console.log(perfil)));
  }
}

import { Injectable } from '@angular/core';

const chave = 'tokenDeAutenticacao';

@Injectable({ providedIn: 'root' })
export class TokenService {
  possuiToken() {
    return !!this.getToken();
    //força virar booleano
  }

  setToken(token: any) {
    window.localStorage.setItem(chave, token);
  }

  getToken() {
    return window.localStorage.getItem(chave);
  }

  removeToken() {
    window.localStorage.removeItem(chave);
  }
}

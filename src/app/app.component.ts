import { Component } from '@angular/core';
import { LoginService } from './login/services/login.service';
import { PerfilService } from './perfil/service/perfil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    public loginService: LoginService,
    public perfilService: PerfilService
  ) {}
  title = 'FalaMansa';

  emailUser = localStorage.getItem('emailUser');

  //Essa implementação esta errada, mas é oq tem para hoje
  deslogar(): void {
    this.loginService.deslogar();
    localStorage.removeItem('emailUser');
    window.location.reload();
  }

  listaInfoPerfil(): void {
    this.perfilService.listaInfoPerfil();
  }
}

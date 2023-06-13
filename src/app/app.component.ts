import { Component } from '@angular/core';
import { LoginService } from './login/services/login.service';
import { PerfilService } from './perfil/service/perfil.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    public loginService: LoginService,
    public perfilService: PerfilService,
    public router: Router,
    public route: ActivatedRoute
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

  criaUmAnuncio() {
    this.router.navigate(['anuncios/novo'], { relativeTo: this.route });
    //pega a rota atual como base e adiciona a nova
  }
}

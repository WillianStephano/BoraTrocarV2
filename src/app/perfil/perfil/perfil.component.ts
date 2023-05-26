import { Component } from '@angular/core';
import { Perfil } from '../model/Perfil';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/login/services/login.service';
import { PerfilService } from '../service/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent {
  perfil$: Observable<Perfil>;

  constructor(
    private perfilService: PerfilService,
    public loginService: LoginService
  ) {
    this.perfil$ = this.perfilService.listaInfoPerfil();
  }

  ngOnInit(): void {}
}

import { Component } from '@angular/core';
import { Perfil } from '../model/Perfil';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/login/services/login.service';
import { PerfilService } from '../service/perfil.service';
import { Router } from '@angular/router';
import { AnunciosService } from 'src/app/anuncios/services/anuncios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent {
  perfil$: Observable<Perfil>;

  constructor(
    private perfilService: PerfilService,
    public loginService: LoginService,
    private router: Router,
    private anunciosService: AnunciosService
  ) {
    this.perfil$ = this.perfilService.listaInfoPerfil();
  }

  deletaAnuncio(idLivro: number) {
    this.perfilService.apagaAnuncio(idLivro);
  }

  alteraAnuncio(idLivro: number) {
    this.router.navigate(['livro/alterar/', idLivro]);
    /* const anuncio$ = this.anunciosService.pegarAnuncio(idLivro);
    anuncio$.subscribe((anuncio) => {
      //console.log(anuncio);
    }); */
  }

  ngOnInit(): void {}
}

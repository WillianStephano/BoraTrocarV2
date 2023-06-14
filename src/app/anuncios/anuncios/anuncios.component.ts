import { Anuncio } from './../model/anuncio';
import { AnunciosService } from './../services/anuncios.service';
import { Component, HostListener, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { LoginService } from 'src/app/login/services/login.service';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.scss'],
})
export class AnunciosComponent {
  anuncios$: Observable<Anuncio[]>;
  //private paginaRecarregada = false;

  constructor(
    private AnunciosService: AnunciosService,
    public loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.anuncios$ = this.AnunciosService.listaTudo();
    //this.recarregarPagina();
  }

  criaUmAnuncio() {
    this.router.navigate(['novo'], { relativeTo: this.route });
    //pega a rota atual como base e adiciona a nova
  }

  abrirAnuncio(id: number) {
    return this.router.navigate([`livro/${id}`]);
  }

 /*  recarregarPagina() {
    if (
      !this.paginaRecarregada &&
      this.router.url === '/anuncios' &&
      this.loginService.estaAutenticado()
    ) {
      this.paginaRecarregada = true;
      window.location.reload();
      console.log('Página recarregada');
    }
  } */

  ngOnInit() {

  }
}

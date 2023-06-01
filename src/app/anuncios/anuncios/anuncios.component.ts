import { Anuncio } from './../model/anuncio';
import { AnunciosService } from './../services/anuncios.service';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/login/services/login.service';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.scss'],
})
export class AnunciosComponent {
  anuncios$: Observable<Anuncio[]>;

  constructor(
    private AnunciosService: AnunciosService,
    public loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.anuncios$ = this.AnunciosService.listaTudo();
  }

  criaUmAnuncio() {
    this.router.navigate(['novo'], { relativeTo: this.route });
    //pega a rota atual como base e adiciona a nova
  }

  abrirAnuncio(id: number) {
    return (
      this.router.navigate(['livro']), this.AnunciosService.pegarAnuncio(id)
    );
  }

  ngOnInit(): void {}
}

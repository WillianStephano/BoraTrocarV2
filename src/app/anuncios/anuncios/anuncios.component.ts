import { AnunciosService } from './../services/anuncios.service';
import { Component } from '@angular/core';
import { Anuncio } from '../model/anuncio';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.scss'],
})
export class AnunciosComponent {
  anuncios$: Observable<Anuncio[]>;

  constructor(
    private AnunciosService: AnunciosService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.anuncios$ = this.AnunciosService.listaTudo();
  }

  criaUmAnuncio() {
    this.router.navigate(['novo'], { relativeTo: this.route });
    //pega a rota atual como base e adiciona a nova
  }

  ngOnInit(): void {}
}

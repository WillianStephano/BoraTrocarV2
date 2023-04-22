import { AnunciosService } from './../services/anuncios.service';
import { Component } from '@angular/core';
import { Anuncio } from '../model/anuncio';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.scss'],
})
export class AnunciosComponent {
  anuncios$: Observable<Anuncio[]>;

  constructor(private AnunciosService: AnunciosService) {

    this.anuncios$ = this.AnunciosService.listaTudo();
  }

  ngOnInit(): void {}
}

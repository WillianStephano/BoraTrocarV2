import { AnunciosService } from './../services/anuncios.service';
import { Component, Input } from '@angular/core';
import { Anuncio } from '../model/anuncio';
import { Observable } from 'rxjs/internal/Observable';

export interface MeuObjeto {
  token: string;
}

@Component({
  selector: 'app-anuncio-aberto',
  templateUrl: './anuncio-aberto.component.html',
  styleUrls: ['./anuncio-aberto.component.scss'],
})
export class AnuncioAbertoComponent {

  anuncio$: Observable<Anuncio>;
  constructor(private anunciosService: AnunciosService) {
    this.anuncio$ = this.anunciosService.pegarAnuncio(1);
    console.log('cacete');

  }
}

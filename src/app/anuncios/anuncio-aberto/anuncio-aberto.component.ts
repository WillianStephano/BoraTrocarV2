import { ActivatedRoute, Router } from '@angular/router';
import { AnunciosService } from './../services/anuncios.service';
import { Component, Input } from '@angular/core';
import { Anuncio } from '../model/anuncio';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';

export interface MeuObjeto {
  token: string;
}

@Component({
  selector: 'app-anuncio-aberto',
  templateUrl: './anuncio-aberto.component.html',
  styleUrls: ['./anuncio-aberto.component.scss'],
})
export class AnuncioAbertoComponent {
  anuncio$: Observable<Anuncio> | null;

  constructor(
    private anunciosService: AnunciosService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.anuncio$ = null;
  }

  abrirChat() {
    console.log('chat');
    return this.router.navigate([`/chat`]);
  }

  ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get('idLivro');
    const idN = Number(id);

    this.anuncio$ = this.anunciosService.pegarAnuncio(idN);
    //this.anuncio$ = this.anunciosService.pegarAnuncio(1);
  }
}

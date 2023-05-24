import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CadastroAnunciosService } from './services/anuncios-cadastro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anuncios-cadastro',
  templateUrl: './anuncios-cadastro.component.html',
  styleUrls: ['./anuncios-cadastro.component.scss'],
})
export class AnunciosCadastroComponent {
  cadastroAnunciosFormulario: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private cadastroAnunciosService: CadastroAnunciosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cadastroAnunciosFormulario = this.formBuilder.group({
      tituloLivro: [''],
      autorLivro: [''],
      descricaoLivro: [''],
    });
  }

  cadastrarAnuncio() {
    const tituloLivro = this.cadastroAnunciosFormulario.get('tituloLivro')?.value;
    const autorLivro = this.cadastroAnunciosFormulario.get('autorLivro')?.value;
    const descricaoLivro = this.cadastroAnunciosFormulario.get('descricaoLivro')?.value;
    console.log('cadastra anuncio');

    this.cadastroAnunciosService
      .insere(tituloLivro, autorLivro, descricaoLivro)
      .subscribe(() => {
        alert('Cadastro efetuado com sucesso');
        this.router.navigateByUrl('/anuncios');
      });
  }
}

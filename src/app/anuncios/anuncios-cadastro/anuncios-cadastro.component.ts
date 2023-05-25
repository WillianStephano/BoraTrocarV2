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
      isbn: [''],
      nomeLivro: [''],
      autor: [''],
     // descricaoLivro: [''],
      condicao: [''],
      categoria: [''],
    });
  }

  cadastrarAnuncio() {
    const isbn = this.cadastroAnunciosFormulario.get('isbn')?.value;
    const nomeLivro = this.cadastroAnunciosFormulario.get('nomeLivro')?.value;
    const autor = this.cadastroAnunciosFormulario.get('autor')?.value;
   // const descricaoLivro = this.cadastroAnunciosFormulario.get('descricaoLivro')?.value;
    const condicao = this.cadastroAnunciosFormulario.get('condicao')?.value;
    const categoria = this.cadastroAnunciosFormulario.get('categoria')?.value;

    this.cadastroAnunciosService
      .insere(
        isbn,
        nomeLivro,
        autor,
       // descricaoLivro,
        condicao,
        categoria
      )
      .subscribe(() => {
        alert('Cadastro efetuado com sucesso');
        this.router.navigateByUrl('/anuncios');
      });
  }
}

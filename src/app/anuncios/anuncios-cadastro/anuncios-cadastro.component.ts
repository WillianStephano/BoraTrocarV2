import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CadastroAnunciosService } from './services/anuncios-cadastro.service';
import { Router } from '@angular/router';

interface Condicao {
  value: string;
  valorVisualizado: string;
}

@Component({
  selector: 'app-anuncios-cadastro',
  templateUrl: './anuncios-cadastro.component.html',
  styleUrls: ['./anuncios-cadastro.component.scss'],
})
export class AnunciosCadastroComponent {
  cadastroAnunciosFormulario: FormGroup = new FormGroup({});
  valorSelecionado: string = '';

  condicoes: Condicao[] = [
    { value: 'novo', valorVisualizado: 'Novo' },
    { value: 'usado', valorVisualizado: 'Usado' },
    { value: 'avariado', valorVisualizado: 'Avariado' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private cadastroAnunciosService: CadastroAnunciosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cadastroAnunciosFormulario = this.formBuilder.group({
      isbn: [[''], Validators.pattern(/^[0-9-]+$/)],
      nomeLivro: ['', [Validators.required]],
      autor: [''],
      condicao: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      descricao: [''],
    });
  }

  cadastrarAnuncio() {
    const isbn = this.cadastroAnunciosFormulario.get('isbn')?.value;
    const nomeLivro = this.cadastroAnunciosFormulario.get('nomeLivro')?.value;
    const autor = this.cadastroAnunciosFormulario.get('autor')?.value;
    const condicao = this.cadastroAnunciosFormulario.get('condicao')?.value;
    const categoria = this.cadastroAnunciosFormulario.get('categoria')?.value;
    const descricao = this.cadastroAnunciosFormulario.get('descricao')?.value;

    this.cadastroAnunciosService
      .insere(isbn, nomeLivro, autor, condicao, categoria, descricao)
      .subscribe(() => {
        alert('Livro cadastrado com sucesso');
        this.router.navigateByUrl('/anuncios');
      });
  }
}

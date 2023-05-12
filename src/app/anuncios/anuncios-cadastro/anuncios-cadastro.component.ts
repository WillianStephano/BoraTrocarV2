import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-anuncios-cadastro',
  templateUrl: './anuncios-cadastro.component.html',
  styleUrls: ['./anuncios-cadastro.component.scss'],
})
export class AnunciosCadastroComponent {
  cadastroAnuncioFormulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.cadastroAnuncioFormulario = this.formBuilder.group({
      tituloLivro: [null],
      autorLivro: [null],
    });
  }
}

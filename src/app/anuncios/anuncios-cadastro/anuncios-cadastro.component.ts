
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-anuncios-cadastro',
  templateUrl: './anuncios-cadastro.component.html',
  styleUrls: ['./anuncios-cadastro.component.scss'],
})
export class AnunciosCadastroComponent {
  cadastroAnuncioFormulario: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.cadastroAnuncioFormulario = this.formBuilder.group({
      tituloLivro: [null],
      autorLivro: [null],
    });
  }
}

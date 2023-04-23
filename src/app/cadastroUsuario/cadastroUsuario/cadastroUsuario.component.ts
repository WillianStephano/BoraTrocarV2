import { CadastroUsuarioService } from './services/cadastroUsuario.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastroUsuario.component.html',
  styleUrls: ['./cadastroUsuario.component.scss'],
})
export class CadastroUsuarioComponent {
  cadastroUsuarioFormulario: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private CadastroUsuarioService: CadastroUsuarioService //private router: Router
  ) {}

  ngOnInit(): void {
    this.cadastroUsuarioFormulario = this.formBuilder.group({
      //aqui eu controlo o form de cadastro, o primeiro parametro do array é o valor padrao do form.
      nomeUsuario: ['', Validators.required],
      email: ['', Validators.required],
      nickname: ['', Validators.required],
      senha: ['', Validators.required],
      dataNascimento: ['', Validators.required],
    });
  }

  cadastrarUsuario() {
    const nomeUsuario =
      this.cadastroUsuarioFormulario.get('nomeUsuario')?.value;
    const email = this.cadastroUsuarioFormulario.get('email')?.value;
    const nickname = this.cadastroUsuarioFormulario.get('nickname')?.value;
    const senha = this.cadastroUsuarioFormulario.get('senha')?.value;
    const dataNascimento =
      this.cadastroUsuarioFormulario.get('dataNascimento')?.value;

    this.CadastroUsuarioService.insereNoBanco(
      nomeUsuario,
      email,
      nickname,
      senha,
      dataNascimento
    ).subscribe(() => console.log('a'));
  }

  limpar() {
    this.cadastroUsuarioFormulario.reset();
  }
}

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
    private CadastroUsuarioService: CadastroUsuarioService,
    private router: Router //private router: Router
  ) {}

  ngOnInit(): void {
    this.cadastroUsuarioFormulario = this.formBuilder.group({
      //aqui eu controlo o form de cadastro, o primeiro parametro do array é o valor padrao do form.
      nomeUsuario: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
          Validators.pattern(/^[a-zA-Z\s]*$/),
        ],
      ],

      email: ['', [Validators.required, Validators.email]],

      nickname: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      senha: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
        ],
      ],

      dataNascimento: [
        '',
        [Validators.required /* this.validaDataNascimento() */],
      ],
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
    ).subscribe(() => {
      alert('Cadastro efetuado com sucesso');
      this.router.navigateByUrl('/login');
    });
  }

  limpar() {
    this.cadastroUsuarioFormulario.reset();
  }

  /* validaDataNascimento(): Validators {
    return (cadastroUsuarioFormulario: FormGroup) => {
      const dataAtual = new Date();
      const anoAtual = dataAtual.getFullYear();
      console.log(anoAtual);

      const dataDoForm = cadastroUsuarioFormulario.get('dataNascimento')?.value;
      console.log(dataDoForm);

      if (dataDoForm >= anoAtual) {
        return { dataMaxima: true };
      }

      return null;
    };
  } */
}

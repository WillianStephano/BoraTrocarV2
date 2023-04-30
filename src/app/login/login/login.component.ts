import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide: boolean = true;

  loginFormulario: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private LoginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginFormulario = this.formBuilder.group({
      //aqui eu controlo o form de login, o primeiro parametro do array é o valor padrao do form.
      email: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  login() {
    const email = this.loginFormulario.get('email')?.value;
    const senha = this.loginFormulario.get('senha')?.value;

    console.log(email, senha);

    this.LoginService.autentica(email, senha).subscribe(
      () => this.router.navigateByUrl('/anuncios'), //Da para usar o navigate([/anuncios, nome do usuario logado ou sla ])
      (err) => {
        console.log(err);
        this.loginFormulario.reset();
        alert('Email ou senha invalidos.');
      }
    );
  }
}

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

  //VAI TER QUE TROCAR TUDO QUE É USERNAME POR EMAIL, ta assim pq a api teste usa como username.

  ngOnInit(): void {
    this.loginFormulario = this.formBuilder.group({
      //aqui eu controlo o form de login, o primeiro parametro do array é o valor padrao do form.
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    const userName = this.loginFormulario.get('userName')?.value;
    const password = this.loginFormulario.get('password')?.value;

    console.log(userName, password);

    this.LoginService.autentica(userName, password).subscribe(
      () => this.router.navigateByUrl('/postagens'), //Da para usar o navigate([postagens, nome do usuario logado ou sla ])
      (err) => {
        console.log(err);
        this.loginFormulario.reset();
        alert('Email ou senha invalidos.');
      }
    );
  }
}

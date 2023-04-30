import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.Component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent {
  nome: string = 'Nome Completo';
  imgPerfil: string = '';
  nickname: string = 'teste1';
  email: string = 'teste1@exemplo.com';
  premium: boolean = true;
  qtnAnuncios: number = 5;
}

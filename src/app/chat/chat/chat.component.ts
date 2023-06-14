import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

interface Mensagem {
  usuario: string;
  conteudo: string;
  enviado: boolean;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  mensagens: Mensagem[] = [];
  formularioMensagem: FormGroup;

  constructor() {
    this.formularioMensagem = new FormGroup({
      messageControl: new FormControl(''),
    });

    this.mensagens.push({
      usuario: 'Usuário teste',
      conteudo: 'Esta é uma mensagem fixa.',
      enviado: true,
    });
  }

  enviaMensagem() {
    const conteudo = this.formularioMensagem.get('messageControl')?.value;

    const novaMensagem: Mensagem = {
      usuario: 'Usuario',
      conteudo: conteudo,
      enviado: true,
    };

    this.mensagens.push(novaMensagem);

    this.formularioMensagem.get('messageControl')?.setValue('');
  }
}

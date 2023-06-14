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
  }

  enviaMensagem() {
    return;
  }
}

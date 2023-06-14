import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/login/services/login.service';

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

  constructor(private loginService: LoginService) {
    this.formularioMensagem = new FormGroup({
      messageControl: new FormControl(''),
    });

    this.mensagens.push({
      usuario: 'Entre em com:',
      conteudo: 'Negocie a troca do livro aqui!',
      enviado: true,
    });
  }

  enviaMensagem() {
    if (this.loginService.estaAutenticado()) {
      const conteudo = this.formularioMensagem.get('messageControl')?.value;

      const novaMensagem: Mensagem = {
        usuario: 'Usuario',
        conteudo: conteudo,
        enviado: true,
      };

      this.mensagens.push(novaMensagem);

      this.formularioMensagem.get('messageControl')?.setValue('');
    } else {
      alert('Logue para enviar mensagem');
    }
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroUsuarioRoutingModule } from './cadastroUsuario-routing.module';
import { CadastroUsuarioComponent } from './cadastroUsuario/cadastroUsuario.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CadastroUsuarioComponent],
  imports: [
    CommonModule,
    CadastroUsuarioRoutingModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
})
export class CadastroUsuarioModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { LoginModule } from './login/login.module';
import { CadastroUsuarioModule } from './cadastroUsuario/cadastroUsuario.module';
import { PerfilModule } from './perfil/perfil.module';
import { ChatModule } from './chat/chat.module';
import { AuthGuard } from './guards/auth-guard';
import { AnunciosGuard } from './guards/anuncios-guard';
import { RodapeComponent } from './rodape/rodape.component';

//Tudo que é modulo tem q estar aqui lembre-se disso.
@NgModule({
  declarations: [AppComponent, RodapeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LoginModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CadastroUsuarioModule,
    PerfilModule,
    MatSelectModule,
    ChatModule,
  ],
  providers: [AuthGuard, AnunciosGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}

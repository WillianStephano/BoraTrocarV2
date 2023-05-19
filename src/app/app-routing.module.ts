import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { CadastroUsuarioComponent } from './cadastroUsuario/cadastroUsuario/cadastroUsuario.component';
import { PerfilComponent } from './perfil/perfil/perfil.component';
import { AnunciosCadastroComponent } from './anuncios/anuncios-cadastro/anuncios-cadastro.component';
import { AuthGuard } from './guards/auth-guard';
import { AnunciosGuard } from './guards/anuncios-guard';

const routes: Routes = [
  //Se o caminho for so "localhost/" ele vai redirecionar para "anuncios".
  { path: '', pathMatch: 'full', redirectTo: 'anuncios' },
  { path: 'login', component: LoginComponent },
  { path: 'cadastroUsuario', component: CadastroUsuarioComponent },
  { path: 'perfil', canActivate: [AuthGuard], component: PerfilComponent },
  {
    path: 'anuncios/novo',
    canActivate: [AuthGuard],
    canActivateChild: [AnunciosGuard],
    component: AnunciosCadastroComponent,
  },
  {
    //Somente quando o caminho chamado for "/anuncios" que sera carregado o componente anuncios.
    path: 'anuncios',
    loadChildren: () =>
      import('./anuncios/anuncios.module').then((m) => m.AnunciosModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { CadastroUsuarioComponent } from './cadastroUsuario/cadastroUsuario/cadastroUsuario.component';

const routes: Routes = [
  //Se o caminho for so "localhost/" ele vai redirecionar para "anuncios".
  { path: '', pathMatch: 'full', redirectTo: 'anuncios' },
  { path: 'login', component: LoginComponent },
  { path: 'cadastroUsuario', component: CadastroUsuarioComponent },
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

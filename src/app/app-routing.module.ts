import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { CadastroComponent } from './cadastro/cadastro/cadastro.component';

const routes: Routes = [
  //Se o caminho for so "localhost/" ele vai redirecionar para "anuncios".
  { path: '', pathMatch: 'full', redirectTo: 'anuncios' },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
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

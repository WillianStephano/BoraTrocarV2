import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnunciosComponent } from './anuncios/anuncios.component';
import { AnunciosCadastroComponent } from './anuncios-cadastro/anuncios-cadastro.component';

const routes: Routes = [
  { path: '', component: AnunciosComponent },
  { path: 'novo', component: AnunciosCadastroComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnunciosRoutingModule {}

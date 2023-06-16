import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnunciosCadastroComponent } from './anuncios-cadastro/anuncios-cadastro.component';
import { AnunciosComponent } from './anuncios/anuncios.component';
import { AnunciosRoutingModule } from './anuncios-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'; //analisar uso
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { AnuncioAbertoComponent } from './anuncio-aberto/anuncio-aberto.component';
import { AnunciosAlterarComponent } from './anuncios-alterar/anuncios-alterar.component';

@NgModule({
  declarations: [
    AnunciosComponent,
    AnunciosCadastroComponent,
    AnuncioAbertoComponent,
    AnunciosAlterarComponent,
  ],
  imports: [
    CommonModule,
    AnunciosRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
})
export class AnunciosModule {}

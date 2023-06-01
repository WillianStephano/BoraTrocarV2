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
import { ReactiveFormsModule } from '@angular/forms';
import { AnuncioAbertoComponent } from './anuncio-aberto/anuncio-aberto.component';

@NgModule({
  declarations: [AnunciosComponent, AnunciosCadastroComponent, AnuncioAbertoComponent],
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
  ],
})
export class AnunciosModule {}

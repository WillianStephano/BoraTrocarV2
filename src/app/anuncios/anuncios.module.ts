import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnunciosRoutingModule } from './anuncios-routing.module';
import { AnunciosComponent } from './anuncios/anuncios.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'; //analisar uso
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { AnunciosCadastroComponent } from './anuncios-cadastro/anuncios-cadastro.component'; //teste
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [AnunciosComponent, AnunciosCadastroComponent],
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
  ],
})
export class AnunciosModule {}

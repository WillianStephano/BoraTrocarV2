import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnunciosCadastroComponent } from './anuncios-cadastro.component';

describe('AnunciosCadastroComponent', () => {
  let component: AnunciosCadastroComponent;
  let fixture: ComponentFixture<AnunciosCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnunciosCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnunciosCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncioAbertoComponent } from './anuncio-aberto.component';

describe('AnuncioAbertoComponent', () => {
  let component: AnuncioAbertoComponent;
  let fixture: ComponentFixture<AnuncioAbertoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnuncioAbertoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnuncioAbertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

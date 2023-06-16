import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnunciosAlterarComponent } from './anuncios-alterar.component';

describe('AnunciosAlterarComponent', () => {
  let component: AnunciosAlterarComponent;
  let fixture: ComponentFixture<AnunciosAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnunciosAlterarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnunciosAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

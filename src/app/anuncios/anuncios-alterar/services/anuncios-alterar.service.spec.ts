import { TestBed } from '@angular/core/testing';

import { AnunciosAlterarService } from './anuncios-alterar.service';

describe('AnunciosAlterarService', () => {
  let service: AnunciosAlterarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnunciosAlterarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

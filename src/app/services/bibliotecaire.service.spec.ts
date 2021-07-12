import { TestBed } from '@angular/core/testing';

import { BibliotecaireService } from './bibliotecaire.service';

describe('BibliotecaireService', () => {
  let service: BibliotecaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BibliotecaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

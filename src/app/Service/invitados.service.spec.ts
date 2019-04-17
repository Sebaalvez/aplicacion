import { TestBed } from '@angular/core/testing';

import { InvitadosService } from './invitados.service';

describe('InvitadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvitadosService = TestBed.get(InvitadosService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TestedeserviceMetodoGETPOSTService } from './testedeservice-metodo-getpost.service';

describe('TestedeserviceMetodoGETPOSTService', () => {
  let service: TestedeserviceMetodoGETPOSTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestedeserviceMetodoGETPOSTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

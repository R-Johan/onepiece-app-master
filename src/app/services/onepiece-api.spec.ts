import { TestBed } from '@angular/core/testing';

import { OnepieceApi } from './onepiece-api';

describe('OnepieceApi', () => {
  let service: OnepieceApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnepieceApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CoinList2Service } from './coin-list2.service';

describe('CoinList2Service', () => {
  let service: CoinList2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoinList2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

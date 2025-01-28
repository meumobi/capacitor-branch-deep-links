import { TestBed } from '@angular/core/testing';

import { DeepLinkWebService } from './deep-link-web.service';

describe('DeepLinkWebService', () => {
  let service: DeepLinkWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeepLinkWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

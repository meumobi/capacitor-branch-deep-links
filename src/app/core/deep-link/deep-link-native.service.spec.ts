import { TestBed } from '@angular/core/testing';

import { DeepLinkNativeService } from './deep-link-native.service';

describe('DeepLinkNativeService', () => {
  let service: DeepLinkNativeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeepLinkNativeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

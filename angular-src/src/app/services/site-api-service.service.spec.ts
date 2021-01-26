import { TestBed } from '@angular/core/testing';

import { SiteApiService } from './site-api-service.service';

describe('SiteApiServiceService', () => {
  let service: SiteApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiteApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

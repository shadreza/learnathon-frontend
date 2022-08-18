import { TestBed } from '@angular/core/testing';

import { TalkApiService } from './talk-api.service';

describe('TalkApiService', () => {
  let service: TalkApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TalkApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

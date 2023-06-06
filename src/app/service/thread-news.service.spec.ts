import { TestBed } from '@angular/core/testing';

import { ThreadNewsService } from './thread-news.service';

describe('ThreadNewsService', () => {
  let service: ThreadNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThreadNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

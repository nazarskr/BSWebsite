import { TestBed } from '@angular/core/testing';

import { YtvideoService } from './ytvideo.service';

describe('YtvideoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YtvideoService = TestBed.get(YtvideoService);
    expect(service).toBeTruthy();
  });
});

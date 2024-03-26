import { TestBed } from '@angular/core/testing';

import { CategoriesNewsService } from './categories-news.service';

describe('CategoriesNewsService', () => {
  let service: CategoriesNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

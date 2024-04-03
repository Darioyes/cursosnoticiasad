import { TestBed } from '@angular/core/testing';

import { CategoriesCoursesService } from './categories-courses.service';

describe('CategoriesCoursesService', () => {
  let service: CategoriesCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

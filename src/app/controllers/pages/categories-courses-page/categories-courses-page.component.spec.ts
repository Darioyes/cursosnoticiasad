import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesCoursesPageComponent } from './categories-courses-page.component';

describe('CategoriesCoursesPageComponent', () => {
  let component: CategoriesCoursesPageComponent;
  let fixture: ComponentFixture<CategoriesCoursesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesCoursesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriesCoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

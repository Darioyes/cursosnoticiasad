import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModifyComponent } from './form-modify.component';

describe('FormModifyComponent', () => {
  let component: FormModifyComponent;
  let fixture: ComponentFixture<FormModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormModifyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

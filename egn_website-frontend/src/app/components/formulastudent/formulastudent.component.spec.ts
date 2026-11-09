import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulastudentComponent } from './formulastudent.component';

describe('FormulastudentComponent', () => {
  let component: FormulastudentComponent;
  let fixture: ComponentFixture<FormulastudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulastudentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulastudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

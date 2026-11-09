import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitypartnersComponent } from './universitypartners.component';

describe('UniversitypartnersComponent', () => {
  let component: UniversitypartnersComponent;
  let fixture: ComponentFixture<UniversitypartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniversitypartnersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversitypartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

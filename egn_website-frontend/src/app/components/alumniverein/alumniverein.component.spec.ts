import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnivereinComponent } from './alumniverein.component';

describe('AlumnivereinComponent', () => {
  let component: AlumnivereinComponent;
  let fixture: ComponentFixture<AlumnivereinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnivereinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnivereinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

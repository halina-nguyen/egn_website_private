import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OureventsComponent } from './ourevents.component';

describe('OureventsComponent', () => {
  let component: OureventsComponent;
  let fixture: ComponentFixture<OureventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OureventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OureventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

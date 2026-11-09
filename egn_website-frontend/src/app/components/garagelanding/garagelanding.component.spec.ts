import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaragelandingComponent } from './garagelanding.component';

describe('GaragelandingComponent', () => {
  let component: GaragelandingComponent;
  let fixture: ComponentFixture<GaragelandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaragelandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaragelandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

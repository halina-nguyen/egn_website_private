import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupporterslandingComponent } from './supporterslanding.component';

describe('SupporterslandingComponent', () => {
  let component: SupporterslandingComponent;
  let fixture: ComponentFixture<SupporterslandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupporterslandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupporterslandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

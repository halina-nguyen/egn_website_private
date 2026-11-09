import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportersseasonsComponent } from './supportersseasons.component';

describe('SupportersseasonsComponent', () => {
  let component: SupportersseasonsComponent;
  let fixture: ComponentFixture<SupportersseasonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportersseasonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportersseasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

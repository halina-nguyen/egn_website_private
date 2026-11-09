import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportersdetailsComponent } from './supportersdetails.component';

describe('SupportersdetailsComponent', () => {
  let component: SupportersdetailsComponent;
  let fixture: ComponentFixture<SupportersdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportersdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportersdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

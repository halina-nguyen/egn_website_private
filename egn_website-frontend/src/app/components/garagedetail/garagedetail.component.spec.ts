import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaragedetailComponent } from './garagedetail.component';

describe('GaragedetailComponent', () => {
  let component: GaragedetailComponent;
  let fixture: ComponentFixture<GaragedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaragedetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaragedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

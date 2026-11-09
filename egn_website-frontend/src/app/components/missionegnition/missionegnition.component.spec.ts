import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionegnitionComponent } from './missionegnition.component';

describe('MissionegnitionComponent', () => {
  let component: MissionegnitionComponent;
  let fixture: ComponentFixture<MissionegnitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionegnitionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionegnitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

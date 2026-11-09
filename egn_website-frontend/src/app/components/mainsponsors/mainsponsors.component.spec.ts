import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainsponsorsComponent } from './mainsponsors.component';

describe('MainsponsorsComponent', () => {
  let component: MainsponsorsComponent;
  let fixture: ComponentFixture<MainsponsorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainsponsorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainsponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

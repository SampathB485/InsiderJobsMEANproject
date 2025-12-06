import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetterexperienceComponent } from './betterexperience.component';

describe('BetterexperienceComponent', () => {
  let component: BetterexperienceComponent;
  let fixture: ComponentFixture<BetterexperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetterexperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetterexperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

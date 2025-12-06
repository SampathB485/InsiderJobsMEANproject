import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandinghomepageComponent } from './landinghomepage.component';

describe('LandinghomepageComponent', () => {
  let component: LandinghomepageComponent;
  let fixture: ComponentFixture<LandinghomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandinghomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandinghomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

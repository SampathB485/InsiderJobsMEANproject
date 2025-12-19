import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewapplicantsComponent } from './viewapplicants.component';

describe('ViewapplicantsComponent', () => {
  let component: ViewapplicantsComponent;
  let fixture: ComponentFixture<ViewapplicantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewapplicantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewapplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

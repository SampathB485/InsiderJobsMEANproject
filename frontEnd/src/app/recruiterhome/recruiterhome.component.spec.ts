import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterhomeComponent } from './recruiterhome.component';

describe('RecruiterhomeComponent', () => {
  let component: RecruiterhomeComponent;
  let fixture: ComponentFixture<RecruiterhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruiterhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruiterhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

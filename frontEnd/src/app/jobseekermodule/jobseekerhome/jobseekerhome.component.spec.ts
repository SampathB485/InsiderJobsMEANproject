import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerhomeComponent } from './jobseekerhome.component';

describe('JobseekerhomeComponent', () => {
  let component: JobseekerhomeComponent;
  let fixture: ComponentFixture<JobseekerhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

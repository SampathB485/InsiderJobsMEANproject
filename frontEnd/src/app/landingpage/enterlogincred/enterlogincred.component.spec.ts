import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterlogincredComponent } from './enterlogincred.component';

describe('EnterlogincredComponent', () => {
  let component: EnterlogincredComponent;
  let fixture: ComponentFixture<EnterlogincredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterlogincredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterlogincredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

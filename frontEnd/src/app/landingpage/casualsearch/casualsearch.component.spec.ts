import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasualsearchComponent } from './casualsearch.component';

describe('CasualsearchComponent', () => {
  let component: CasualsearchComponent;
  let fixture: ComponentFixture<CasualsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasualsearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasualsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

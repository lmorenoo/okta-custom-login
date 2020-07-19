import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCodeLearnComponent } from './admin-code-learn.component';

describe('AdminCodeLearnComponent', () => {
  let component: AdminCodeLearnComponent;
  let fixture: ComponentFixture<AdminCodeLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCodeLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCodeLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

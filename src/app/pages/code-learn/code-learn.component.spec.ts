import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeLearnComponent } from './code-learn.component';

describe('AddComponent', () => {
  let component: CodeLearnComponent;
  let fixture: ComponentFixture<CodeLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

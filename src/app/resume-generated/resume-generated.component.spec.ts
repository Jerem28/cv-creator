import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeGeneratedComponent } from './resume-generated.component';

describe('ResumeGeneratedComponent', () => {
  let component: ResumeGeneratedComponent;
  let fixture: ComponentFixture<ResumeGeneratedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeGeneratedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeGeneratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

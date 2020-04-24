import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumeGeneratedComponent } from './resume-generated.component';

describe('ResumeGeneratedComponent', () => {
  const component: ResumeGeneratedComponent = new ResumeGeneratedComponent();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeGeneratedComponent ]
    })
    .compileComponents();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

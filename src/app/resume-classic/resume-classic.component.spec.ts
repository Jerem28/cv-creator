import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeClassicComponent } from './resume-classic.component';

describe('ResumeClassicComponent', () => {
  let component: ResumeClassicComponent;
  let fixture: ComponentFixture<ResumeClassicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeClassicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeClassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeContentAsideComponent } from './resume-content-aside.component';

describe('ResumeContentAsideComponent', () => {
  let component: ResumeContentAsideComponent;
  let fixture: ComponentFixture<ResumeContentAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeContentAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeContentAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

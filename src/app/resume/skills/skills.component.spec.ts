import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { SkillsComponent } from './skills.component';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

describe('SkillsComponent', () => {
  let skillComponent: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        TranslateModule.forRoot()
      ],
      declarations: [ SkillsComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(SkillsComponent);
    skillComponent = fixture.componentInstance;
  }));


  it('should create', () => {
    expect(skillComponent).toBeTruthy();
  });

  it('should construct a skill list', () => {
    const formBuilder: FormBuilder = new FormBuilder();
    skillComponent.formBuilder = formBuilder;
    const resumeFormData =
    {
      skillsList: [],
    };
    const resumeForm: FormGroup = skillComponent.formBuilder.group(resumeFormData);
    skillComponent.resumeForm = resumeForm;

    console.log('[TEST]');
    console.log(skillComponent.skillsList);

    expect(skillComponent.skillsList).not.toBe(null);

  });
});

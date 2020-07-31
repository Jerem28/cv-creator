import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { EducationComponent } from './education.component';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TranslateModule } from '@ngx-translate/core';

describe('EducationComponent', () => {
  let educationComponent: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;

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
        MatDatepickerModule,
        MatNativeDateModule,
        TranslateModule.forRoot()
      ],
      declarations: [ EducationComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(EducationComponent);
    educationComponent = fixture.componentInstance;
  }));


  it('should create', () => {
    expect(educationComponent).toBeTruthy();
  });

  it('should construct an educations list', () => {
    const formBuilder: FormBuilder = new FormBuilder();
    educationComponent.formBuilder = formBuilder;
    const resumeFormData =
    {
      educationsList: [],
    };
    const resumeForm: FormGroup = educationComponent.formBuilder.group(resumeFormData);
    educationComponent.resumeForm = resumeForm;

    console.log('[TEST]');
    console.log(educationComponent.educationsList);

    expect(educationComponent.educationsList).not.toBe(null);

  });
});

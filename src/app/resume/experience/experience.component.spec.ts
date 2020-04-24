import { async, TestBed } from '@angular/core/testing';
import { ExperienceComponent } from './experience.component';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

describe('ExperienceComponent', () => {

  const experienceComponent = new ExperienceComponent();

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
        MatNativeDateModule
      ],
      declarations: [ ExperienceComponent ]
    })
    .compileComponents();
  }));


  it('should create', () => {
    expect(experienceComponent).toBeTruthy();
  });

  it('should construct an experiences list', () => {
    const formBuilder: FormBuilder = new FormBuilder();
    experienceComponent.formBuilder = formBuilder;
    const resumeFormData =
    {
      experiencesList: [],
    };
    const resumeForm: FormGroup = experienceComponent.formBuilder.group(resumeFormData);
    experienceComponent.resumeForm = resumeForm;

    console.log('[TEST]');
    console.log(experienceComponent.experiencesList);

    expect(experienceComponent.experiencesList).not.toBe(null);

  });
});

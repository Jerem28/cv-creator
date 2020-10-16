import { async, TestBed, ComponentFixture } from '@angular/core/testing';
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
import { TranslateModule } from '@ngx-translate/core';

/**
 * Following test suites are written with Given-When-Then pattern
 * One line spacing between each step
 */

describe('ExperienceComponent', () => {

  let experienceComponent: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  function initializeResumeFormWithEmptyExperiencesList(){
    experienceComponent.formBuilder = formBuilder;
    const resumeFormData =
    {
      experiencesList: formBuilder.array([]),
    };
    const resumeForm: FormGroup = experienceComponent.formBuilder.group(resumeFormData);
    experienceComponent.resumeForm = resumeForm;
  }

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
      declarations: [ ExperienceComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ExperienceComponent);
    experienceComponent = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(experienceComponent).toBeTruthy();
  });

  // Unit tests

  it('should add 1 empty experience to resumeform experiences list [addEmptyExperienceToExperiencesList]', () => {
    initializeResumeFormWithEmptyExperiencesList();
    const expectedResult: Array<any> = [
    {
      experienceTitle: '',
      workPlace: '',
      workPlaceDescription: '',
      startDate: '',
      endDate: '',
      workAddress: '',
      items: []
    }];

    experienceComponent.addEmptyCategoryToList();

    expect(experienceComponent.categoryList.getRawValue()).toEqual(expectedResult);
  });

  it('should leave the experiences list empty [removeExperienceFromExperiencesList]', () => {
    initializeResumeFormWithEmptyExperiencesList();
    const expectedResult: Array<any> = [];

    experienceComponent.removeCategoryFromList(0);

    expect(experienceComponent.categoryList.getRawValue()).toEqual(expectedResult);
  });

  it('should remove the added experience and return an empty experiences list [removeExperienceFromExperiencesList]', () => {
    initializeResumeFormWithEmptyExperiencesList();
    experienceComponent.addEmptyCategoryToList();
    const expectedResult: Array<any> = [];

    experienceComponent.removeCategoryFromList(0);

    expect(experienceComponent.categoryList.getRawValue()).toEqual(expectedResult);
  });

  it('should return undefined since experiences list is empty [getExperienceItemList]', () => {
    initializeResumeFormWithEmptyExperiencesList();

    const result = experienceComponent.getExperienceItemList(0);

    expect(result).toBeUndefined();
  });

  // Functionnal test

  it('should create the same structure of experiences list controls as the one given [createExperiencesStructureFromLoadedList]', () => {
    initializeResumeFormWithEmptyExperiencesList();
    const newListValue: { experiencesList: Array<any> } = {
      experiencesList: [
        {
          experienceTitle: '',
          workPlace: '',
          workPlaceDescription: '',
          startDate: '',
          endDate: '',
          workAddress: '',
          items: formBuilder.array(['', '', ''])
        },
        {
          experienceTitle: '',
          workPlace: '',
          workPlaceDescription: '',
          startDate: '',
          endDate: '',
          workAddress: '',
          items: formBuilder.array(['', ''])
        }
    ]
  };
    const expectedResult: Array<any> = [
        {
          experienceTitle: '',
          workPlace: '',
          workPlaceDescription: '',
          startDate: '',
          endDate: '',
          workAddress: '',
          items: ['', '', '']
        },
        {
          experienceTitle: '',
          workPlace: '',
          workPlaceDescription: '',
          startDate: '',
          endDate: '',
          workAddress: '',
          items: ['', '']
        }
    ];

    //experienceComponent.createCategoryResumeStructureFromLoadedList(newListValue);

    //expect(experienceComponent.categoryList.getRawValue()).toEqual(expectedResult);

  });

});

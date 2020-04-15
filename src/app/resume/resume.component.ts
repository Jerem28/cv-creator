import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, AbstractControl, FormControl } from '@angular/forms';
import { ExperienceComponent } from './experience/experience.component';
import { HeaderComponent } from './header/header.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';

interface ResumeFormStructure {
  fullname: string;
  descriptionSentence: string;
  phone: string;
  personalLink: string;
  email: string;
  address: string;
  profilePicture: string;
  experiencesList: Array<any>;
  educationsList: Array<any>;
  languagesList: Array<any>;
  skillsList: Array<any>;
  hobbiesList: Array<any>;
}

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})

export class ResumeComponent implements OnInit, AfterViewInit {

  @ViewChild(ExperienceComponent)
  private experienceComponent: ExperienceComponent;
  @ViewChild(EducationComponent)
  private educationComponent: EducationComponent;
  @ViewChild(SkillsComponent)
  private skillComponent: SkillsComponent;

  resumeForm: FormGroup;
  formBuilder: FormBuilder;
  resumeFormValue: ResumeFormStructure;

  constructor(private fb: FormBuilder) {
      this.formBuilder = fb;
  }

  ngOnInit(): void {

    // Resume form initialization has to be in ngOnInit() lifecycle hook, not in constructor

    let value: any;

    if (localStorage.getItem('formValue') === '') {
      value = this.resumeFormValue;
    } else {
      value = JSON.parse(localStorage.getItem('formValue'));
    }

    this.resumeForm = this.formBuilder.group({
      fullname: [value && value.fullname] || '',
      descriptionSentence: [value && value.descriptionSentence] || '',
      phone: [value && value.phone] || '',
      personalLink: [value && value.personalLink] || '',
      email: [value && value.email] || '',
      address: [value && value.address] || '',
      profilePicture: [value && value.profilePicture] || '',
      experiencesList: this.formBuilder.array([]),
      educationsList: this.formBuilder.array([]),
      languagesList: this.formBuilder.array([]),
      skillsList: this.formBuilder.array([]),
      hobbiesList: this.formBuilder.array([])
    });

    this.resumeForm.valueChanges.subscribe(formValue => {
      localStorage.setItem('formValue', JSON.stringify(formValue));
    });

  }

  ngAfterViewInit(){
    let value: object;

    if (localStorage.getItem('formValue') === '') {
      value = this.resumeFormValue;
    } else {
      value = JSON.parse(localStorage.getItem('formValue'));
    }
    // We use setTimeout to delay update of form values on another JS VM runtime, until all child views have been created
    // so it updates ASYNCHRONOUSLY and we can use @ViewChild components (otherwise they are undefined)
    setTimeout( () => this.loadResumeForm(value), 0 );
  }

  resetForm() {
    this.resumeForm.reset();
  }

  loadResumeForm(value) {

      // Only if we have value from a precedent resume form, we do the following
      if (value && Object.keys(value).length > 0) {
        console.log('Patch with old form value');
      /* It's mandatory to have same object structure in data saved before reload and in actual resumeForm,
        that is why we push each blank object in this.experiencesList and so on */

        this.experienceComponent.createExperience(value);
        this.educationComponent.createEducation(value);
        this.skillComponent.createSkill(value);
        this.resumeForm.patchValue(value);
      }
  }

  onSubmit(resumeData){
    console.log('Value of resume data :', resumeData);
  }

  addItemToCategory(event: Array<any>){

    // Get arguments from event fired up from child component
    const categoryName: string = event[0];
    const categoryIndex: number = event[1];
    const itemControl: AbstractControl = event[2];

    const category = this.resumeForm.get(categoryName) as FormArray;
    const categoryItems = category.at(categoryIndex).get('items') as FormArray;
    categoryItems.push(itemControl);
  }

  removeItemFromCategory(event: Array<any>){

      // Get arguments from event fired up from child component
      const categoryName: string = event[0];
      const categoryIndex: number = event[1];
      const itemIndex: number = event[2];

      const category = this.resumeForm.get(categoryName) as FormArray;
      const categoryItems = category.at(categoryIndex).get('items') as FormArray;
      categoryItems.removeAt(itemIndex);
  }

}

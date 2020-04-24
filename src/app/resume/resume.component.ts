import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, AbstractControl, FormControl } from '@angular/forms';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { LanguageComponent } from './language/language.component';
import { HobbyComponent } from './hobby/hobby.component';
import { Router } from '@angular/router';
import { ResumeFormStructure, Experience, Education, Hobby, Skill } from '../resume-interfaces';

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
  @ViewChild(HobbyComponent)
  private hobbyComponent: HobbyComponent;
  @ViewChild(LanguageComponent)
  private languageComponent: LanguageComponent;
  @ViewChild(SkillsComponent)
  private skillComponent: SkillsComponent;

  resumeForm: FormGroup;
  resumeFormValue: ResumeFormStructure;
  jsonFileURL: string;

  generatedResumeUrl: string;

  isSideResumePreviewOpened = false;

  constructor(public formBuilder: FormBuilder, private router: Router) { }

  get experienceComponentChild(): ExperienceComponent {
    return this.experienceComponent;
  }

  set experienceComponentChild(experienceComponent: ExperienceComponent) {
    this.experienceComponent = experienceComponent;
  }

  get educationComponentChild(): EducationComponent {
    return this.educationComponent;
  }

  set educationComponentChild(educationComponent: EducationComponent) {
    this.educationComponent = educationComponent;
  }

  get hobbyComponentChild(): HobbyComponent {
    return this.hobbyComponent;
  }

  set hobbyComponentChild(hobbyComponent: HobbyComponent) {
    this.hobbyComponent = hobbyComponent;
  }

  get languageComponentChild(): LanguageComponent {
    return this.languageComponent;
  }

  set languageComponentChild(languageComponent: LanguageComponent) {
    this.languageComponent = languageComponent;
  }

  get skillComponentChild(): SkillsComponent {
    return this.skillComponent;
  }

  set skillComponentChild(skillComponent: SkillsComponent) {
    this.skillComponent = skillComponent;
  }

  ngOnInit(): void {

    // Resume form initialization has to be in ngOnInit() lifecycle hook, not in constructor

    let value: any;

    if (localStorage.getItem('formValue') === '' || localStorage.getItem('formValue') === 'undefined') {
      value = this.resumeFormValue;
    } else {
      value = JSON.parse(localStorage.getItem('formValue'));
    }

    this.initializeResumeForm(value);

    this.resumeForm.valueChanges.subscribe(formValue => {
      localStorage.setItem('formValue', JSON.stringify(formValue));
    });

    this.generatedResumeUrl = window.location.href + '/generated-resume';

  }

  ngAfterViewInit(){
    let value: object;

    if (localStorage.getItem('formValue') === '' || localStorage.getItem('formValue') === 'undefined') {
      value = this.resumeFormValue;
    } else {
      value = JSON.parse(localStorage.getItem('formValue'));
    }
    // We use setTimeout to delay update of form values on another JS VM runtime, until all child views have been created
    // so it updates ASYNCHRONOUSLY and we can use @ViewChild components (otherwise they are undefined)
    setTimeout( () => this.loadResumeForm(value), 0 );

  }

  initializeResumeFormArrays() {
    this.experienceComponent.experiencesList.clear();
    this.educationComponent.educationsList.clear();
    this.languageComponent.languagesList.clear();
    this.skillComponent.skillsList.clear();
    this.hobbyComponent.hobbiesList.clear();
  }

  resetForm() {
    this.resumeForm.reset(); // Only set value of all formGroup to null, but keep data structure
    this.initializeResumeFormArrays(); // Clean all FormArrays, so they are empty
  }

  loadResumeForm(value) {

      this.resetForm();
      console.log('[ResumeComponent] ');
      console.log(this.resumeForm.value);

      // Only if we have value from a precedent resume form, we do the following
      if (value && Object.keys(value).length > 0) {
        console.log('Patch with old form value');
      /* It's mandatory to have same object structure in data saved before reload and in actual resumeForm,
        that is why we push each blank object in this.experiencesList and so on */

        console.log('[ResumeComponent] Creating resumeForm with following value data :');
        console.log(value);

        this.experienceComponent.createExperience(value);
        this.educationComponent.createEducation(value);
        this.skillComponent.createSkill(value);
        this.languageComponent.createLanguage(value);
        this.hobbyComponent.createHobby(value);

        console.log('[ResumeComponent] Actual Resume form structure :');
        console.log(this.resumeForm.value);

        this.resumeForm.patchValue(value);

      }

  }

  initializeResumeForm(value) {
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
  }

  onSubmit(){
    console.warn('[Submit] Value of resume data :', this.resumeForm.value);
    this.router.navigateByUrl('/generated-resume', { state: this.resumeForm.value });
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

  checkedSideResumePreviewOpened(){
    this.isSideResumePreviewOpened = !this.isSideResumePreviewOpened;
  }

  downloadResumeAsJSON(){
    const jsonContent = JSON.stringify(JSON.parse(localStorage.getItem('formValue')), null, 2);
    const data = new Blob([jsonContent], { type: 'text/json' });
    this.jsonFileURL = window.URL.createObjectURL(new File([data], 'resume.json', { type: 'text/json'}));
  }

  importJSON(event: any){
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      const file = event.target.files[0];
      console.log(file);

      let jsonContent: string | ArrayBuffer;

      reader.onloadend = (event) => {
        jsonContent = JSON.parse(reader.result as string);
        this.loadResumeForm(jsonContent as object);
      };

      reader.readAsText(file);
    }
  }
}

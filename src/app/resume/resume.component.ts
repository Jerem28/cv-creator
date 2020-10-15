import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, AbstractControl, FormControl } from '@angular/forms';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { LanguageComponent } from './language/language.component';
import { HobbyComponent } from './hobby/hobby.component';
import { Router } from '@angular/router';
import { ResumeFormStructure, Experience, Education, Hobby, Skill } from '../resume-interfaces';
import { LangService } from '../lang.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})

export class ResumeComponent implements OnInit, AfterViewInit {

  resumeForm: FormGroup;
  resumeFormValue: ResumeFormStructure;
  jsonFileURL: string;
  generatedResumeUrl = '/generated-resume';
  isSideResumePreviewOpened = false;
  appLanguageSelected = 'en';

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

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private lang: LangService) { }

  ngOnInit(): void {

    // Resume form initialization has to be in ngOnInit() lifecycle hook, not in constructor

    this.initializeResumeForm();

    this.resumeForm.valueChanges.subscribe(formValue => {
      localStorage.setItem('formValue', JSON.stringify(formValue));
    });

    this.lang.getValue().subscribe(languageValue => this.appLanguageSelected = languageValue);
  }

  ngAfterViewInit(){
    let value: ResumeFormStructure;

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

  loadResumeForm(value: ResumeFormStructure) {

      this.resetForm();

      // Only if we have value from a precedent resume form, we do the following
      if (value && Object.keys(value).length > 0) {
      /* It's mandatory to have same object structure in data saved before reload and in actual resumeForm,
        that is why we push each blank object in this.experiencesList and so on */
        this.createResumeCategoriesFromData(value);
        this.resumeForm.patchValue(value);
      }

  }

  private createResumeCategoriesFromData(resumeData: ResumeFormStructure) {
    this.experienceComponent.createExperiencesStructureFromLoadedList(resumeData);
    this.educationComponent.createEducationsStructureFromLoadedList(resumeData);
    this.skillComponent.createSkillsStructureFromLoadedList(resumeData);
    this.languageComponent.createLanguagesStructureFromLoadedList(resumeData);
    this.hobbyComponent.createHobbiesStructureFromLoadedList(resumeData);
  }

  initializeResumeForm() {
    this.resumeForm = this.formBuilder.group({
      fullname: '',
      descriptionSentence: '',
      phone: '',
      personalLink: '',
      email: '',
      address: '',
      profilePicture: '',
      experiencesList: this.formBuilder.array([]),
      educationsList: this.formBuilder.array([]),
      languagesList: this.formBuilder.array([]),
      skillsList: this.formBuilder.array([]),
      hobbiesList: this.formBuilder.array([])
    });
  }

  onSubmit(){
    console.warn('[Submit] Value of resume data :', this.resumeForm.value);
    console.warn('Redirect to ' + this.generatedResumeUrl);
    this.router.navigateByUrl(this.generatedResumeUrl, { state: this.resumeForm.value });
  }

  addItemToCategory(event: Array<any>){
    const categoryName: string = event[0];
    const categoryIndex: number = event[1];
    const itemControl: AbstractControl = event[2];
    const category = this.resumeForm.get(categoryName) as FormArray;
    const categoryItems = category.at(categoryIndex).get('items') as FormArray;

    categoryItems.push(itemControl);
  }

  removeItemFromCategory(event: Array<any>){
      const categoryName: string = event[0];
      const categoryIndex: number = event[1];
      const itemIndex: number = event[2];
      const category = this.resumeForm.get(categoryName) as FormArray;
      const categoryItems = category.at(categoryIndex).get('items') as FormArray;

      categoryItems.removeAt(itemIndex);
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

      let jsonContent: any;

      reader.onloadend = () => {
        jsonContent = JSON.parse(reader.result as string);
        this.loadResumeForm(jsonContent as ResumeFormStructure);
      };

      reader.readAsText(file);
    }
  }

  onLanguageChange(){
    console.log('Language set : ' + this.appLanguageSelected);
    this.lang.setValue(this.appLanguageSelected);
  }

  activatePreviewLightbox(previewContainerId: string) {
    console.log('activatePreviewLightbox');
    const previewIframeContainer = document.getElementById(previewContainerId);
    previewIframeContainer.className = 'lightbox-preview-iframe-container';
    previewIframeContainer.style.display = 'block';
  }
}
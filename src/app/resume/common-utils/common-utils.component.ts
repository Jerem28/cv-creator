import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-common-utils',
  template: ''
})
export class CommonUtilsComponent implements OnInit {

  categoryListName: string;
  @Input() formBuilder: FormBuilder;
  @Input() resumeForm: FormGroup;

  constructor() {
    this.init();
  }

  init(){}

  ngOnInit(): void {
  }

  get categoryFromResume(): FormGroup {
    return this.formBuilder.group({});
  }

  get categoryList(): FormArray {
    return this.resumeForm.get(this.categoryListName) as FormArray;
  }

  createCategoryResumeStructureFromLoadedList(resumeData: ResumeFormStructure){
    resumeData[this.categoryListName].map( () => this.addEmptyCategoryToList() );
  }

  addEmptyCategoryToList(){
    this.categoryList.push(this.categoryFromResume);
  }

  removeCategoryFromList(index: number){
    this.categoryList.removeAt(index);
  }

  moveCategory(index: number, direction: string){
    const control: AbstractControl = this.categoryList.at(index);
    const newIndex = direction === 'up' ? index - 1 : (direction === 'down' ? index + 1 : -1);
    if (!this.checkCategoryIndexIsInArrayLength(newIndex)) { return; }
    this.categoryList.removeAt(index);
    this.categoryList.insert(newIndex, control);
  }

  checkCategoryIndexIsInArrayLength(index: number) {
    return index >= 0 && index < this.categoryList.length;
  }

  get item(): FormControl {
    return this.formBuilder.control('');
  }

}

export interface ResumeFormStructure {
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

export interface Education {
  educationTitle: string;
  startDate: string;
  endDate: string;
  workPlace: string;
  workAddress: string;
}

export interface Experience {
  experienceTitle: string;
  workPlace: string;
  workPlaceDescription: string;
  startDate: string;
  endDate: string;
  workAddress: string;
  items: FormArray;
}

export interface Header {
  fullname: string;
  descriptionSentence: string;
  phone: string;
  personalLink: string;
  email: string;
  address: string;
  profilePicture: string;
}

export interface Hobby {
  hobbyTitle: string;
  hobbyDescription: string;
}

export interface Language {
  languageTitle: string;
  languageLevel: string;
}

export interface Skill {
  skillCategoryTitle: string;
  items: FormArray;
}
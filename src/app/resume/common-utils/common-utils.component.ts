import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ResumeFormStructure } from 'src/app/resume/common-utils/resume-interfaces';

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

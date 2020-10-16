import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ResumeFormStructure } from 'src/app/resume/common-utils/resume-interfaces';

@Component({
  selector: 'app-common-utils',
  templateUrl: './common-utils.component.html',
  styleUrls: ['./common-utils.component.scss']
})
export class CommonUtilsComponent implements OnInit {

  categoryResumeListName: string;
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
    return this.resumeForm.get(this.categoryResumeListName) as FormArray;
  }

  createCategoryResumeStructureFromLoadedList(resumeData: ResumeFormStructure){
    resumeData[this.categoryResumeListName].map( () => this.addEmptyCategoryToList() );
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

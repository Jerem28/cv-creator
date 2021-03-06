import { Component } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { CommonUtilsComponent, Education } from '../common-utils/common-utils.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent extends CommonUtilsComponent {

  constructor() {
    super();
  }

  init(){
    this.categoryListName = 'educationsList';
  }

  get categoryList(): FormArray {
    return this.resumeForm.get('educationsList') as FormArray;
  }

  get categoryFromResume(): FormGroup {
    const education: Education =
    {
      educationTitle: '',
      startDate: '',
      endDate: '',
      workPlace: '',
      workAddress: ''
    };
    return this.formBuilder.group(education);
  }

}

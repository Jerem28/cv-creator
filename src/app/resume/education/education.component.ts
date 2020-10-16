import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, AbstractControl } from '@angular/forms';
import { Education } from 'src/app/resume/common-utils/resume-interfaces';
import { CommonUtilsComponent } from '../common-utils/common-utils.component';

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
    this.categoryResumeListName = 'educationsList';
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

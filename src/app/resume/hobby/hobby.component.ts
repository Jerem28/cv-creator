import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, AbstractControl } from '@angular/forms';
import { Hobby } from 'src/app/resume/common-utils/resume-interfaces';
import { CommonUtilsComponent } from '../common-utils/common-utils.component';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.scss']
})
export class HobbyComponent extends CommonUtilsComponent {

  constructor() {
    super();
  }

  init(){
    this.categoryResumeListName = 'hobbiesList';
  }

  get categoryFromResume(): FormGroup {
    const hobby: Hobby =
    {
      hobbyTitle: '',
      hobbyDescription: ''
    };
    return this.formBuilder.group(hobby);
  }

}
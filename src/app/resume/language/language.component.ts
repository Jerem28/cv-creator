import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, AbstractControl } from '@angular/forms';
import { Language } from 'src/app/resume/common-utils/resume-interfaces';
import { CommonUtilsComponent } from '../common-utils/common-utils.component';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent extends CommonUtilsComponent {

  constructor() {
    super();
  }

  init(){
    this.categoryResumeListName = 'languagesList';
  }

  get categoryFromResume(): FormGroup {
    const language: Language =
    {
      languageTitle: '',
      languageLevel: ''
    };
    return this.formBuilder.group(language);
  }

}
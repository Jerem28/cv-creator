import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonUtilsComponent, Hobby } from '../common-utils/common-utils.component';

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
    this.categoryListName = 'hobbiesList';
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
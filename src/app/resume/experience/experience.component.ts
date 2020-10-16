import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Experience, ResumeFormStructure } from '../common-utils/resume-interfaces';
import { CommonUtilsComponent } from '../common-utils/common-utils.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent extends CommonUtilsComponent {

  // Variables passed from ResumeComponent parent component
  @Input() formBuilder: FormBuilder;
  @Input() resumeForm: FormGroup;

  // Event handling declared to call ResumeComponent parent methods
  @Output() itemAddedEvent = new EventEmitter<Array<any>>();
  @Output() itemRemovedEvent = new EventEmitter<Array<any>>();

  constructor() {
    super();
  }

  init(){
    this.categoryListName = 'experiencesList';
  }

  get categoryFromResume(): FormGroup {
    const experience: Experience =
    {
      experienceTitle: '',
      workPlace: '',
      workPlaceDescription: '',
      startDate: '',
      endDate: '',
      workAddress: '',
      items: this.formBuilder.array([])
    };
    return this.formBuilder.group(experience);
  }

  getExperienceItemList(experienceIndex: number): FormArray {
    return (this.categoryList.length === 0) ? undefined : this.categoryList.at(experienceIndex).get('items') as FormArray;
  }

  createCategoryResumeStructureFromLoadedList(resumeData: ResumeFormStructure) {
    resumeData[this.categoryListName].map( (exp, expIndex) => {
      this.addEmptyCategoryToList();
      if (exp.items) { exp.items.map( () => this.getExperienceItemList(expIndex).push(this.item)); }
    });
  }

  get item(): FormControl {
    return this.formBuilder.control('');
  }

  callParentItemAdded(argumentsArray) {
    this.itemAddedEvent.next(argumentsArray);
  }

  callParentItemRemoved(argumentsArray) {
    this.itemRemovedEvent.next(argumentsArray);
  }

}

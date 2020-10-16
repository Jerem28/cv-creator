import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { CommonUtilsComponent, ResumeFormStructure, Skill } from '../common-utils/common-utils.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent extends CommonUtilsComponent {

  @Output() itemAddedEvent = new EventEmitter<Array<any>>();
  @Output() itemRemovedEvent = new EventEmitter<Array<any>>();

  constructor() {
    super();
  }

  init(){
    this.categoryListName = 'skillsList';
  }

  get categoryFromResume(): FormGroup {
    const skill: Skill =
    {
      skillCategoryTitle: '',
      items: this.formBuilder.array([])
    };
    return this.formBuilder.group(skill);
  }

  getSkillItemList(skillIndex: number): FormArray {
    return this.categoryList.at(skillIndex).get('items') as FormArray;
  }

  createCategoryResumeStructureFromLoadedList( resumeData: ResumeFormStructure) {
    resumeData[this.categoryListName].map( (skill, skillIndex) => {
      this.addEmptyCategoryToList();
      skill.items.map( () => { this.getSkillItemList(skillIndex).push(this.item); });
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
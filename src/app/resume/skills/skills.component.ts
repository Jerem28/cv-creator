import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Skill } from 'src/app/resume-interfaces';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input() formBuilder: FormBuilder;
  @Input() resumeForm: FormGroup;

  @Output() itemAddedEvent = new EventEmitter<Array<any>>();
  @Output() itemRemovedEvent = new EventEmitter<Array<any>>();

  constructor() { }

  ngOnInit(): void {
    console.log('[SkillsComponent]');
    console.log(this.resumeForm.value);
  }

  get skill(): FormGroup {
    const skill: Skill =
    {
      skillCategoryTitle: '',
      items: this.formBuilder.array([])
    };
    return this.formBuilder.group(skill);
  }

  get skillsList(): FormArray {
    return this.resumeForm.get('skillsList') as FormArray;
  }

  getSkillItemList(skillIndex: number): FormArray {
    return this.skillsList.at(skillIndex).get('items') as FormArray;
  }

  addEmptySkillToSkillsList(){
    this.skillsList.push(this.skill);
  }

  removeSkillFromSkillsList(skillIndex: number){
    this.skillsList.removeAt(skillIndex);
  }

  createSkillsStructureFromLoadedList( { skillsList }: { skillsList: Array<any> }) {
    skillsList.map( (skill, skillIndex) => {
      this.addEmptySkillToSkillsList();
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

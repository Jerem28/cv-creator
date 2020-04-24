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

  addInputSkill(){
    this.skillsList.push(this.skill);
  }

  removeSkill(skillIndex: number){
    this.skillsList.removeAt(skillIndex);
  }

  createSkill(data: any){
    for (let skillIndex = 0; skillIndex < data.skillsList.length; skillIndex++) {
      console.log('Adding skill [' + skillIndex + '] to skillsList');
      this.skillsList.push(this.skill);
      if (data.skillsList[skillIndex].items.length > 0) {
        const skillItemNumber = data.skillsList[skillIndex].items.length;
        for (let itemIndex = 0; itemIndex < skillItemNumber; itemIndex++) {
          console.log('Adding item [' + itemIndex + '] to experience [' + skillIndex + ']');
          this.getSkillItemList(skillIndex).push(this.item);
        }
      }
    }
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

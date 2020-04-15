import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input() formBuilder: FormBuilder;
  @Input() resumeForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    console.log('[SkillsComponent]');
    console.log(this.resumeForm.value);
  }

  get skill(): FormControl {
    return this.formBuilder.control('');
  }

  get skillsList(): FormArray {
    return this.resumeForm.get('skillsList') as FormArray;
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
    }
  }

}

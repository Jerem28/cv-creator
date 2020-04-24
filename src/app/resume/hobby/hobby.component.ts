import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Hobby } from 'src/app/resume-interfaces';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.scss']
})
export class HobbyComponent implements OnInit {

  @Input() formBuilder: FormBuilder;
  @Input() resumeForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  get hobby(): FormGroup {
    const hobby: Hobby =
    {
      hobbyTitle: '',
      hobbyDescription: ''
    };
    return this.formBuilder.group(hobby);
  }

  get hobbiesList(): FormArray {
    return this.resumeForm.get('hobbiesList') as FormArray;
  }

  createHobby(data: any) {
    for (let hobbyIndex = 0; hobbyIndex < data.hobbiesList.length; hobbyIndex++) {
      console.log('Adding hobby [' + hobbyIndex + '] to hobbiesList');
      this.hobbiesList.push(this.hobby);
    }
  }

  addInputHobby(){
    this.hobbiesList.push(this.hobby);
  }

  removeHobby(hobbyIndex: number){
    this.hobbiesList.removeAt(hobbyIndex);
  }

}

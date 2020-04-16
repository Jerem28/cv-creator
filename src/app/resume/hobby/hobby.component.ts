import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

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
    return this.formBuilder.group({
      hobbyTitle: '',
      hobbyDescription: ''
    });
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

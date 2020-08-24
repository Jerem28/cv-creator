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

  createHobbiesStructureFromLoadedList({ hobbiesList }: { hobbiesList: Array<any>}) {
    hobbiesList.map( () => this.addEmptyHobbyToHobbiesList());
  }

  addEmptyHobbyToHobbiesList(){
    this.hobbiesList.push(this.hobby);
  }

  removeHobbyFromHobbiesList(hobbyIndex: number){
    this.hobbiesList.removeAt(hobbyIndex);
  }

}

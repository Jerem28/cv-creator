import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, AbstractControl } from '@angular/forms';
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

  moveHobby(index: number, direction: string){
    const control: AbstractControl = this.hobbiesList.at(index);
    const newIndex = direction === 'up' ? index - 1 : (direction === 'down' ? index + 1 : -1);
    if (!this.checkHobbyIndexIsInArrayLength(newIndex)) { return; }
    this.hobbiesList.removeAt(index);
    this.hobbiesList.insert(newIndex, control);
  }

  checkHobbyIndexIsInArrayLength(index: number){
    return index >= 0 && index < this.hobbiesList.length;
  }

}

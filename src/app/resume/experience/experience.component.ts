import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Experience } from '../../resume-interfaces';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit, OnChanges {

  // Variables passed from ResumeComponent parent component
  @Input() formBuilder: FormBuilder;
  @Input() resumeForm: FormGroup;

  // Event handling declared to call ResumeComponent parent methods
  @Output() itemAddedEvent = new EventEmitter<Array<any>>();
  @Output() itemRemovedEvent = new EventEmitter<Array<any>>();

  constructor() { }

  ngOnChanges(): void {
    console.log('[ExperienceComponent]');
    console.log(this.resumeForm.value);
  }

  ngOnInit(): void { }

  get experience(): FormGroup {
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

  get experiencesList(): FormArray {
    return this.resumeForm.get('experiencesList') as FormArray;
  }

  getExperienceItemList(experienceIndex: number): FormArray {
    return (this.experiencesList.length === 0) ? undefined : this.experiencesList.at(experienceIndex).get('items') as FormArray;
  }

  addEmptyExperienceToExperiencesList(){
    this.experiencesList.push(this.experience);
  }

  removeExperienceFromExperiencesList(experienceIndex: number){
    this.experiencesList.removeAt(experienceIndex);
  }

  createExperiencesStructureFromLoadedList({ experiencesList }: { experiencesList: Array<any> }) {
    experiencesList.map( (exp, expIndex) => {
      this.addEmptyExperienceToExperiencesList();
      if (exp.items) { exp.items.controls.map( () => this.getExperienceItemList(expIndex).push(this.item)); }
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

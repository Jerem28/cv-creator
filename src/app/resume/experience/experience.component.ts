import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

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

  ngOnInit(): void {

  }

  get experience(): FormGroup {
    return this.formBuilder.group({
      experienceTitle: '',
      workPlace: '',
      workPlaceDescription: '',
      startDate: '',
      endDate: '',
      workAddress: '',
      items: this.formBuilder.array([])
    });
  }

  get experiencesList(): FormArray {
    return this.resumeForm.get('experiencesList') as FormArray;
  }

  getExperienceItemList(experienceIndex: number): FormArray {
    return this.experiencesList.at(experienceIndex).get('items') as FormArray;
  }

  addInputExperience(){
    this.experiencesList.push(this.experience);
  }

  removeExperience(experienceIndex: number){
    this.experiencesList.removeAt(experienceIndex);
  }

  createExperience(data: any) {
    for (let experienceIndex = 0; experienceIndex < data.experiencesList.length; experienceIndex++){
      console.log('Adding experience [' + experienceIndex + '] to experiencesList');
      this.experiencesList.push(this.experience);
      if (data.experiencesList[experienceIndex].items.length > 0) {
        const experienceItemNumber = data.experiencesList[experienceIndex].items.length;
        for (let itemIndex = 0; itemIndex < experienceItemNumber; itemIndex++) {
          console.log('Adding item [' + itemIndex + '] to experience [' + experienceIndex + ']');
          this.getExperienceItemList(experienceIndex).push(this.item);
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

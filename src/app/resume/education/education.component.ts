import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  @Input() formBuilder: FormBuilder;
  @Input() resumeForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    console.log('[EducationComponent]');
    console.log(this.resumeForm.value);
  }

  get educationsList(): FormArray {
    return this.resumeForm.get('educationsList') as FormArray;
  }

  get education(): FormGroup {
    return this.formBuilder.group({
      educationTitle: '',
      startDate: '',
      endDate: '',
      workPlace: '',
      workAddress: ''
    });
  }

  addInputEducation(){
    const educationFormGroup: FormGroup = this.education;
    this.educationsList.push(educationFormGroup);
  }

  removeEducation(educationIndex: number){
    this.educationsList.removeAt(educationIndex);
  }

  createEducation(data: any){
    for (let educationIndex = 0; educationIndex < data.educationsList.length; educationIndex++) {
      console.log('Adding education [' + educationIndex + '] to educationsList');
      this.educationsList.push(this.education);
    }
  }
}

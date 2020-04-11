import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  resumeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
      const value = JSON.parse(localStorage.getItem('formValue'));

      this.loadResumeForm(value);

      this.resumeForm.valueChanges.subscribe(formValue => {
        localStorage.setItem('formValue', JSON.stringify(formValue));
      });

  }

  ngOnInit(): void {
  }

  resetForm() {
    this.resumeForm.reset();
  }

  loadResumeForm(value) {

      this.resumeForm = this.formBuilder.group({
        fullname: [value && value.fullname] || '',
        descriptionSentence: [value && value.descriptionSentence] || '',
        phone: [value && value.phone] || '',
        personalLink: [value && value.personalLink] || '',
        email: [value && value.email] || '',
        address: [value && value.address] || '',
        experiencesList: this.formBuilder.array([]),
        educationsList: this.formBuilder.array([]),
        languagesList: this.formBuilder.array([]),
        skillsList: this.formBuilder.array([]),
        hobbiesList: this.formBuilder.array([])
      });

      // Only if we have value from a precedent resume form, we do the following
      if (value) {

      /* It's mandatory to have same object structure in data saved before reload and in actual resumeForm,
        that is why we push each blank object in this.experiencesList and so on */

      for (let experienceIndex = 0; experienceIndex < value.experiencesList.length; experienceIndex++){
        this.experiencesList.push(this.experience);
        if (value.experiencesList[experienceIndex].items.length > 0) {
          const experienceItemNumber = value.experiencesList[experienceIndex].items.length;
          for (let itemIndex = 0; itemIndex < experienceItemNumber; itemIndex++) {
            console.log('Adding item [' + itemIndex + '] to experience [' + experienceIndex + ']');
            this.getExperienceItemList(experienceIndex).push(this.item);
          }
        }
      }

      console.log('On patch la valeur de experiencesList');
      console.log(this.experiencesList.value);
      this.resumeForm.patchValue(value);

    }
  }

  onSubmit(resumeData){
    console.log('Value of resume data :', resumeData);
  }

  get experiencesList(): FormArray {
    return this.resumeForm.get('experiencesList') as FormArray;
  }

  get experience(): FormGroup {
    return this.formBuilder.group({
      experienceTitle: [''],
      workPlace: [''],
      workPlaceDescription: [''],
      startDate: [''],
      endDate: [''],
      workAddress: [''],
      items: this.formBuilder.array([])
    });
  }

  getExperienceItemList(experienceIndex: number): FormArray {
    return this.experiencesList.at(experienceIndex).get('items') as FormArray;
  }

  get item(): FormControl {
    return this.formBuilder.control('');
  }

  addInputExperience(){
    const experienceFormGroup: FormGroup = this.experience;
    this.experiencesList.push(experienceFormGroup);
  }

  removeExperience(experienceIndex: number){
      this.experiencesList.removeAt(experienceIndex);
  }

  addItemToCategory(categoryName: string, categoryIndex: number, itemControl: AbstractControl){
    const category = this.resumeForm.get(categoryName) as FormArray;
    const categoryItems = category.at(categoryIndex).get('items') as FormArray;
    categoryItems.push(itemControl);
  }

}

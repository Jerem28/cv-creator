import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  @Input() formBuilder: FormBuilder;
  @Input() resumeForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  get language(): FormGroup {
    return this.formBuilder.group({
      languageTitle: '',
      languageLevel: ''
    });
  }

  get languagesList(): FormArray {
    return this.resumeForm.get('languagesList') as FormArray;
  }

  createLanguage(data: any) {
    for (let languageIndex = 0; languageIndex < data.languagesList.length; languageIndex++){
        console.log('Adding language [' + languageIndex + '] to languagesList');
        this.languagesList.push(this.language);
    }
  }

  addInputLanguage(){
    this.languagesList.push(this.language);
  }

  removeLanguage(languageIndex: number){
    this.languagesList.removeAt(languageIndex);
  }

}

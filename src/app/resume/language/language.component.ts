import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Language } from 'src/app/resume-interfaces';

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
    const language: Language =
    {
      languageTitle: '',
      languageLevel: ''
    };
    return this.formBuilder.group(language);
  }

  get languagesList(): FormArray {
    return this.resumeForm.get('languagesList') as FormArray;
  }

  createLanguagesStructureFromLoadedList({ languagesList }: {languagesList: Array<any> } ) {
    languagesList.map( () => this.addEmptyLanguageToLanguagesList() );
  }

  addEmptyLanguageToLanguagesList(){
    this.languagesList.push(this.language);
  }

  removeLanguageFromLanguagesList(languageIndex: number){
    this.languagesList.removeAt(languageIndex);
  }

}

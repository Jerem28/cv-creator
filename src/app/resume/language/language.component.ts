import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, AbstractControl } from '@angular/forms';
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

  moveLanguage(index: number, direction: string){
    const control: AbstractControl = this.languagesList.at(index);
    const newIndex = direction === 'up' ? index - 1 : (direction === 'down' ? index + 1 : -1);
    if (!this.checkLanguageIndexIsInArrayLength(newIndex)) { return; }
    this.languagesList.removeAt(index);
    this.languagesList.insert(newIndex, control);
  }

  checkLanguageIndexIsInArrayLength(index: number){
    return index >= 0 && index < this.languagesList.length;
  }

}

import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';
import { fromEvent } from 'rxjs';

interface ResumeFormStructure {
  fullname: string;
  descriptionSentence: string;
  phone: string;
  personalLink: string;
  email: string;
  address: string;
  profilePicture: string;
  experiencesList: Array<any>;
  educationsList: Array<any>;
  languagesList: Array<any>;
  skillsList: Array<any>;
  hobbiesList: Array<any>;
}

@Component({
  selector: 'app-resume-generated',
  templateUrl: './resume-generated.component.html',
  styleUrls: ['./resume-generated.component.scss']
})
export class ResumeGeneratedComponent implements OnInit {

  resumeData;
  resumeFormValue: ResumeFormStructure;

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    if (localStorage.getItem('formValue') === '') {
      this.resumeData = this.resumeFormValue;
    } else {
      this.resumeData = JSON.parse(localStorage.getItem('formValue'));
    }

    fromEvent(window, 'storage').subscribe((storageEvent) => {
      this.resumeData = JSON.parse(localStorage.getItem('formValue'));
    });
  }

}

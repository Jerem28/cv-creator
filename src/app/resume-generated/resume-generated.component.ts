import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { ResumeFormStructure } from '../resume-interfaces';

@Component({
  selector: 'app-resume-generated',
  templateUrl: './resume-generated.component.html',
  styleUrls: ['./resume-generated.component.scss']
})
export class ResumeGeneratedComponent implements OnInit {

  resumeData;

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('formValue') === '' || localStorage.getItem('formValue') === 'undefined') {
      this.resumeData = this.initializeResumeData();
    } else {
      this.resumeData = JSON.parse(localStorage.getItem('formValue'));
    }

    fromEvent(window, 'storage').subscribe((storageEvent) => {
      this.resumeData = JSON.parse(localStorage.getItem('formValue'));
    });
  }

  initializeResumeData(): ResumeFormStructure {
    return {
      fullname: '',
      descriptionSentence: '',
      phone: '',
      personalLink: '',
      email: '',
      address: '',
      profilePicture: '',
      experiencesList: [],
      educationsList: [],
      languagesList: [],
      skillsList: [],
      hobbiesList: []
    };
  }

}

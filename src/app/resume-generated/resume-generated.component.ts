import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fromEvent } from 'rxjs';
import { LangService } from '../lang.service';
import { ResumeFormStructure } from '../resume/common-utils/common-utils.component';

@Component({
  selector: 'app-resume-generated',
  templateUrl: './resume-generated.component.html',
  styleUrls: ['./resume-generated.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ResumeGeneratedComponent implements OnInit {

  resumeData;

  constructor(private lang: LangService) { }

  ngOnInit(): void {
    if (localStorage.getItem('formValue') === '' || localStorage.getItem('formValue') === 'undefined') {
      this.resumeData = this.initializeResumeData();
    } else {
      this.resumeData = JSON.parse(localStorage.getItem('formValue'));
    }

    fromEvent(window, 'storage').subscribe(() => {
      this.resumeData = JSON.parse(localStorage.getItem('formValue'));
    });

    this.lang.getValue().subscribe( value => {
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

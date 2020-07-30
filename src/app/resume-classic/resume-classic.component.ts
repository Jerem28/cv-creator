import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fromEvent } from 'rxjs';
import { LangService } from '../lang.service';
import { ResumeFormStructure } from '../resume-interfaces';

@Component({
  selector: 'app-resume-classic',
  templateUrl: './resume-classic.component.html',
  styleUrls: ['./resume-classic.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ResumeClassicComponent implements OnInit {

  resumeData;

  constructor(private lang: LangService) { }

  ngOnInit(): void {
    if (!localStorage.getItem('formValue')) {
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

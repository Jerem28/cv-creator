import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LangService } from '../lang.service';
import { ResumeFormStructure } from '../resume-interfaces';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-resume-content-aside',
  templateUrl: './resume-content-aside.component.html',
  styleUrls: ['./resume-content-aside.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ResumeContentAsideComponent implements OnInit {

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

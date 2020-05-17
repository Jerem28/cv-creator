import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fromEvent } from 'rxjs';
import { ResumeFormStructure } from '../resume-interfaces';
import { LangService } from '../lang.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

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

    /*const pageStylesHTML = document.getElementsByTagName('style');
    const stylesToRemove = [];
    const headHTML = document.getElementsByTagName('head').item(0);

    for(let i = 0; i < pageStylesHTML.length; i++) {
      if(pageStylesHTML[i].textContent.search('.mat-toolbar')) {
        stylesToRemove.push(pageStylesHTML[i]);
      }
    }

    for (const style of stylesToRemove) {
      headHTML.removeChild(style);
    }

    const scssFile = new File();

    const reader = new FileReader();
    let fileResult;
    reader.onloadend = () => fileResult = reader.result;
    reader.readAsText('./resume-generated.component.scss');  
  
    const link = document.createElement(
      '<style>' + 
    );
    headHTML.appendChild(); */

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

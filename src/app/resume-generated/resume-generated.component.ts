import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-resume-generated',
  templateUrl: './resume-generated.component.html',
  styleUrls: ['./resume-generated.component.scss']
})
export class ResumeGeneratedComponent implements OnInit {

  resumeData;

  constructor(private router: Router) {
    console.log("[ResumeGenerated] " + this.router.getCurrentNavigation().extras.state);
    this.resumeData = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {}

}

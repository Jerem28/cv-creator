import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @Input() formBuilder: FormBuilder;
  @Input() resumeForm: FormGroup;

  profilePictureUrl = './../../assets/img/avatar.png';

  constructor() { }

  ngOnInit(): void {
    this.profilePictureUrl = (this.resumeForm.get('profilePicture') as FormControl).value;
  }

  ngAfterViewInit(): void {
  }

  readProfilePictureUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (progressEvent: ProgressEvent) => {
        this.profilePictureUrl = (progressEvent.target as FileReader).result as string;
        console.log('Patch Valueeeeeeee');
        this.resumeForm.patchValue({
          profilePicture: this.profilePictureUrl,
        });
      };

      // Get filename in base64 format
      reader.readAsDataURL(event.target.files[0]);
      console.log('ONCHANGEEEEEEE');

    }
  }

}

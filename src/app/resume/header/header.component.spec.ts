import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

describe('HeaderComponent', () => {
  let headerComponent: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatIconModule
      ],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    headerComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  // TODO: fix this test
  /*it('should create', () => {
    const formBuilder: FormBuilder = new FormBuilder();
    headerComponent.formBuilder = formBuilder;
    const resumeFormData =
    {
      fullName: '',
      descriptionSentence: '',
      phone: '',
      personalLink: '',
      email: '',
      address: ''
    };
    const resumeForm: FormGroup = headerComponent.formBuilder.group(resumeFormData);
    headerComponent.resumeForm = resumeForm;
    expect(headerComponent).toBeTruthy();
  });*/
});

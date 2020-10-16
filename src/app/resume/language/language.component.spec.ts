import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { LanguageComponent } from './language.component';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

describe('LanguageComponent', () => {
  let languageComponent: LanguageComponent;
  let fixture: ComponentFixture<LanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        TranslateModule.forRoot()
      ],
      declarations: [ LanguageComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(LanguageComponent);
    languageComponent = fixture.componentInstance;
  }));


  it('should create', () => {
    expect(languageComponent).toBeTruthy();
  });

  it('should construct a languages list', () => {
    const formBuilder: FormBuilder = new FormBuilder();
    languageComponent.formBuilder = formBuilder;
    const resumeFormData =
    {
      languagesList: [],
    };
    const resumeForm: FormGroup = languageComponent.formBuilder.group(resumeFormData);
    languageComponent.resumeForm = resumeForm;

    console.log('[TEST]');
    console.log(languageComponent.categoryList);

    expect(languageComponent.categoryList).not.toBe(null);

  });
});

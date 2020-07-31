import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HobbyComponent } from './hobby.component';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

describe('HobbyComponent', () => {
  let hobbyComponent = new HobbyComponent();
  let fixture: ComponentFixture<HobbyComponent>;

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
      declarations: [ HobbyComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(HobbyComponent);
    hobbyComponent = fixture.componentInstance;
  }));


  it('should create', () => {
    expect(hobbyComponent).toBeTruthy();
  });

  it('should construct an hobbies list', () => {
    const formBuilder: FormBuilder = new FormBuilder();
    hobbyComponent.formBuilder = formBuilder;
    const resumeFormData =
    {
      hobbiesList: [],
    };
    const resumeForm: FormGroup = hobbyComponent.formBuilder.group(resumeFormData);
    hobbyComponent.resumeForm = resumeForm;

    console.log('[TEST]');
    console.log(hobbyComponent.hobbiesList);

    expect(hobbyComponent.hobbiesList).not.toBe(null);

  });
});

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { HeaderComponent } from './resume/header/header.component';
import { ExperienceComponent } from './resume/experience/experience.component';
import { LanguageComponent } from './resume/language/language.component';
import { HobbyComponent } from './resume/hobby/hobby.component';
import { SkillsComponent } from './resume/skills/skills.component';
import { EducationComponent } from './resume/education/education.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { SafeUrlPipe } from './pipes/safe-url/safe-url.pipe';

// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { LangService } from './services/lang/lang.service';
import { ResumeGeneratedComponent } from './resume-result/resume-generated/resume-generated.component';
import { ResumeClassicComponent } from './resume-result/resume-classic/resume-classic.component';
import { ResumeContentAsideComponent } from './resume-result/resume-content-aside/resume-content-aside.component';
import { CommonUtilsComponent } from './resume/common-utils/common-utils.component';

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    HeaderComponent,
    ExperienceComponent,
    LanguageComponent,
    HobbyComponent,
    SkillsComponent,
    EducationComponent,
    ResumeGeneratedComponent,
    SafeUrlPipe,
    ResumeClassicComponent,
    ResumeContentAsideComponent,
    CommonUtilsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ReactiveFormsModule,
    BrowserAnimationsModule,

    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatSelectModule,

    // configure the imports
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  providers: [ MatDatepickerModule, LangService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

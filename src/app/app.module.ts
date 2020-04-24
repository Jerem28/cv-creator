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
import { ResumeGeneratedComponent } from './resume-generated/resume-generated.component';

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
import { SafeUrlPipe } from './safe-url.pipe';

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
    SafeUrlPipe
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
    MatExpansionModule
  ],
  providers: [ MatDatepickerModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }

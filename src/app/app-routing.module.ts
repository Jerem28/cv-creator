import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { ResumeGeneratedComponent } from './resume-result/resume-generated/resume-generated.component';
import { ResumeClassicComponent } from './resume-result/resume-classic/resume-classic.component';
import { ResumeContentAsideComponent } from './resume-result/resume-content-aside/resume-content-aside.component';

const routes: Routes = [
  {
    path: '', // Default route, TITRW we leave a blank value
    component: ResumeComponent
  },
  {
    path: 'generated-resume',
    component: ResumeGeneratedComponent
  },
  {
    path: 'resume-classic',
    component: ResumeClassicComponent
  },
  {
    path: 'resume-content-aside',
    component: ResumeContentAsideComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

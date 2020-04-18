import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { ResumeGeneratedComponent } from './resume-generated/resume-generated.component';

const routes: Routes = [
  {
    path: '', // Default route, TITRW we leave a blank value
    component: ResumeComponent
  },
  {
    path: 'generated-resume',
    component: ResumeGeneratedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

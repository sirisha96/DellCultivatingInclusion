import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateDetailsComponent } from './core/candidate-details/candidate-details.component';
import { HRHomeComponent } from './core/hr-home/hr-home.component';
import { InterviewerQuestionairComponent } from './core/interviewerQuestionair/interviewer-questionair.component';

const routes: Routes = [
  { path: 'home', component: HRHomeComponent },
  { path: 'candidate-details', component: CandidateDetailsComponent },
  { path: 'candidate-feedback/:id', component: InterviewerQuestionairComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HRHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

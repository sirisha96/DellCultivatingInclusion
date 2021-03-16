import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HRHomeComponent } from './core/hr-home/hr-home.component';
import { CandidateDetailsComponent } from './core/candidate-details/candidate-details.component';
import { NavbarComponent } from './core/header-footer/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QuestionService } from './shared/services/questions.service';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarService } from './shared/services/navBar-service';

@NgModule({
  declarations: [
    AppComponent,
    HRHomeComponent,
    CandidateDetailsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbCollapseModule    
  ],
  providers: [QuestionService,NavBarService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }

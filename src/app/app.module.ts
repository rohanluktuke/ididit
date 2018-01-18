import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EnterAccomplishmentsComponent } from './enter-accomplishments/enter-accomplishments.component';
import { ViewAccomplishmentsComponent } from './view-accomplishments/view-accomplishments.component';

import { Routes, RouterModule } from '@angular/router';
import { ViewOneAccomplishmentComponent } from './view-accomplishments/view-one-accomplishment/view-one-accomplishment.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';

const appRoutes: Routes = [
  { path: '', component: EnterAccomplishmentsComponent},
  { path: 'create', component: EnterAccomplishmentsComponent},
  { path: 'view', component: ViewAccomplishmentsComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'signin', component: SigninComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EnterAccomplishmentsComponent,
    ViewAccomplishmentsComponent,
    ViewOneAccomplishmentComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

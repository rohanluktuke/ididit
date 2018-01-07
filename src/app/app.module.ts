import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EnterAccomplishmentsComponent } from './enter-accomplishments/enter-accomplishments.component';
import { ViewAccomplishmentsComponent } from './view-accomplishments/view-accomplishments.component';
import { SigninComponent } from './signin/signin.component';
import { Routes, RouterModule } from '@angular/router';
import { ViewOneAccomplishmentComponent } from './view-accomplishments/view-one-accomplishment/view-one-accomplishment.component';

const appRoutes: Routes = [
  { path: '', component: EnterAccomplishmentsComponent},
  { path: 'create', component: EnterAccomplishmentsComponent},
  { path: 'view', component: ViewAccomplishmentsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EnterAccomplishmentsComponent,
    ViewAccomplishmentsComponent,
    SigninComponent,
    ViewOneAccomplishmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

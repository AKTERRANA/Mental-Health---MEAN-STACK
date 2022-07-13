import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { CrisisComponent } from './crisis/crisis.component';
import { ProfessionalComponent } from './professional/professional.component';
import { AddnewComponent } from './addnew/addnew.component';
import { GroupComponent } from './group/group.component';
import { HomeComponent } from './home/home.component';
import { CouncellingComponent } from './councelling/councelling.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ConditionsComponent,
    CrisisComponent,
    ProfessionalComponent,
    AddnewComponent,
    GroupComponent,
    HomeComponent,
    CouncellingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

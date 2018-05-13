import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { StepNavigationService } from './services/step-navigation.service';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    Step1Component,
    Step2Component,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StepNavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

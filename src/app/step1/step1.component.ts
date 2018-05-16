import { Component, OnInit, EventEmitter, Output, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StepNavigationService } from '../services/step-navigation.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit, OnDestroy {

  rForm: FormGroup;
  description: String = '';
  name: String = '';
  titleAlert: String = 'This field is required';
  interval = null;

  @Output() nextOut = new EventEmitter<number>();

  constructor(
    private fb: FormBuilder,
    private navigation: StepNavigationService
  ) { }

  ngOnInit() {
    this.rForm = this.fb.group({
      'name': [null, Validators.required],
      'description': [null, Validators.compose([
        Validators.required, Validators.minLength(30),
        Validators.maxLength(500)
      ])],
    });

    this.interval = setInterval(() => {
      this.navigation.setValid(this.rForm.valid);
      this.navigation.setData({ data: this.rForm.getRawValue(), step: 1 });
    }, 100);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}

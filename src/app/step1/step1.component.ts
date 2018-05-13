import { Component, OnInit, EventEmitter, Output, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { StepNavigationService } from '../services/step-navigation.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit, OnDestroy {

  rForm: FormGroup;
  post: any;
  description: String = '';
  name: String = '';
  titleAlert: String = 'This field is required';
  interval = null;

  @Output() nextOut = new EventEmitter<number>();

  constructor(
    private fb: FormBuilder,
    private navigation: StepNavigationService
  ) {

    this.rForm = fb.group({
      'name': [null, Validators.required],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      'validate': ''
    });

    this.interval = setInterval(() => {
      navigation.setValid(this.rForm.valid);
    }, 100);
  }

  next(values) {
    this.nextOut.emit(values);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }


}

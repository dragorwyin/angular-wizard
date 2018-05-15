import { Component, OnInit, EventEmitter, Output, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { StepNavigationService } from '../services/step-navigation.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {

  @Output() nextOut = new EventEmitter<number>();

  constructor(
    private fb: FormBuilder,
    private navigation: StepNavigationService
  ) {

    navigation.setValid(true);
    navigation.setData({ data: {}, step: 2 });
  }

  ngOnInit() {
  }

}

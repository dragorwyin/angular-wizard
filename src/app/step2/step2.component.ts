import { Component, OnInit } from '@angular/core';
import { StepNavigationService } from '../services/step-navigation.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {

  constructor(private navigation: StepNavigationService) {
  }

  ngOnInit() {
  }

}

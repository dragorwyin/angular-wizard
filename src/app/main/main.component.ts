import { Component, OnInit } from '@angular/core';
import { StepNavigationService } from '../services/step-navigation.service';
import { StepData } from '../stepData';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  step = 1;
  isValid = false;
  nav: StepNavigationService;
  data: Array<StepData>;

  constructor(private navigation: StepNavigationService) { }

  next($event) {
    this.nav.next();
  }

  prev() {
    this.nav.back();
  }

  submit() {
    console.log(this.data);
  }

  ngOnInit() {
    this.navigation.getIsValid().subscribe((isValid: boolean) => {
      this.isValid = isValid;
    });

    this.navigation.getStep().subscribe((step: number) => {
      this.step = step;
    });

    this.navigation.getData().subscribe((data: Array<StepData>) => {
      this.data = data;
    });

    this.nav = this.navigation;
  }

}

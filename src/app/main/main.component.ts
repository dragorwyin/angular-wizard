import { Component, OnInit } from '@angular/core';
import { StepNavigationService } from '../services/step-navigation.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  step = 1;
  isValid = false;
  nav: StepNavigationService;
  data: any;

  constructor(private navigation: StepNavigationService) {
    navigation.getIsValid().subscribe(data => {
      this.isValid = data;
    });

    navigation.getStep().subscribe(data => {
      this.step = data;
    });

    navigation.getData().subscribe(data => {
      this.data = data;
    });

    this.nav = navigation;
  }

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
  }

}

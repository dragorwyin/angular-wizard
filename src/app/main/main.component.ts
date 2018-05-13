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

  constructor(private navigation: StepNavigationService) {
    navigation.isValid().subscribe(data => {
      this.isValid = data;
    });
  }

  next($event) {
    this.step++;
  }

  prev() {
    this.step--;
  }

  ngOnInit() {
  }

}

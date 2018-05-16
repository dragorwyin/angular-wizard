import { Injectable } from '@angular/core';
import { StepData } from '../stepData';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class StepNavigationService {

  step = 1;
  valid = false;
  data: Array<StepData> = [];

  private validObs = new Subject<boolean>();
  private stepObs = new Subject<number>();
  private dataObs = new Subject<Array<StepData>>();

  constructor() {

  }

  setValid(valid) {
    this.valid = valid;
    this.validObs.next(this.valid);
  }

  setData(d: StepData) {
    this.data[d.step - 1] = d.data;
    this.dataObs.next(this.data);
  }

  getIsValid(): Observable<boolean> {
    return this.validObs.asObservable();
  }

  getStep(): Observable<number> {
    return this.stepObs.asObservable();
  }

  getData(): Observable<Array<StepData>> {
    return this.dataObs.asObservable();
  }

  back() {
    this.step -= 1;
    this.stepObs.next(this.step);
  }

  next() {
    this.step += 1;
    this.stepObs.next(this.step);
  }
}

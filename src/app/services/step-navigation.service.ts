import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StepNavigationService {

  step = 1;
  valid = false;
  data = [];
  private validObs = new Subject<boolean>();
  private stepObs = new Subject<number>();
  private dataObs = new Subject<any>();

  constructor() {

  }

  setValid(valid) {
    this.valid = valid;
    this.validObs.next(this.valid);
  }

  setData(d) {
    this.data[d.step - 1] = d.data;
    this.dataObs.next(this.data);
  }

  getIsValid(): Observable<boolean> {
    return this.validObs.asObservable();
  }

  getStep(): Observable<number> {
    return this.stepObs.asObservable();
  }

  getData(): Observable<number> {
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

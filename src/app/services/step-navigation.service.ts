import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StepNavigationService {

  step = 1;
  private valid = new Subject<boolean>();

  constructor() {

  }

  setValid(valid) {
    this.valid.next(valid);
  }

  back() {
    this.step--;
  }

  next() {
    this.step++;
  }

  isValid(): Observable<boolean> {
    return this.valid.asObservable();
  }

}

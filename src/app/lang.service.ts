import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  private langInfo: BehaviorSubject<string>;

  constructor() {
    this.langInfo = new BehaviorSubject<string>('en');
  }

  getValue(): Observable<string> {
    return this.langInfo.asObservable();
  }

  setValue(newValue): void {
    this.langInfo.next(newValue);
  }
}

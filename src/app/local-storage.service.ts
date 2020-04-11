import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  localData: Object;

  constructor() { }

  set(localData: any){
    this.localData = localData;
  }

  get(){
    return this.localData;
  }
}

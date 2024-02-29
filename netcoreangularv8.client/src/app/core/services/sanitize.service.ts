import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SanititizeService {

  constructor() { }

  prepareDateTimeForMySQL = (date: Date, applyDifferenceTime: boolean = true, replaceTZ: boolean = false): string => {
    if (applyDifferenceTime) {
      date.setTime(date.getTime() - (date.getTimezoneOffset() * 60000));
    }
    return replaceTZ ? date.toISOString().replace(/T/g, ' ').replace(/Z/g, '') : date.toISOString();
  }
}

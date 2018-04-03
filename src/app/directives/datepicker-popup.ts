import { Component, Injectable } from '@angular/core';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-config';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-struct';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter';

@Injectable()
export class NgbDateFRParserFormatter extends NgbDateParserFormatter {

  parse(value: string): NgbDateStruct {
    if (value) {
      const dateParts = value.trim().split('/');
      if (dateParts.length === 1 && isNumber(dateParts[0])) {
        return { year: toInteger(dateParts[0]), month: null, day: null };
      } else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
        return { year: toInteger(dateParts[1]), month: toInteger(dateParts[0]), day: null };
      } else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
        return { year: toInteger(dateParts[2]), month: toInteger(dateParts[1]), day: toInteger(dateParts[0]) };
      }
    }
    return null;
  }

  format(date: NgbDateStruct): string {
    let stringDate: string = "";
    if (date) {
      stringDate += isNumber(date.day) ? padNumber(date.day) + "/" : "";
      stringDate += isNumber(date.month) ? padNumber(date.month) + "/" : "";
      stringDate += date.year;
    }
    return stringDate;
  }
}

@Component({
  selector: 'ngbd-datepicker-popup',
  template: `<input class="form-control" placeholder="dd-mm-yyyy" name="dp" [(ngModel)]="model" ngbDatepicker #d="ngbDatepicker">
  <div class="add-on"  (click)="d.toggle()" > <i class="icon-calendar"></i> </div>`,
  providers: [{ provide: NgbDateParserFormatter, useClass: NgbDateFRParserFormatter }]
})
export class NgbdDatepickerPopup {
  today = new Date();
  model;
  constructor(config: NgbDatepickerConfig) {
    config.minDate = { year: 1920, month: 1, day: 1 };
    config.maxDate = { year: this.today.getFullYear() - 18, month: this.today.getMonth() + 1, day: this.today.getDate() };
  }
}

function padNumber(value: number) {
  if (isNumber(value)) {
    return `0${value}`.slice(-2);
  } else {
    return "";
  }
}

function isNumber(value: any): boolean {
  return !isNaN(toInteger(value));
}

function toInteger(value: any): number {
  return parseInt(`${value}`, 10);
}



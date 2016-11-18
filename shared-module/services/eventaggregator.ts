import { Injectable, EventEmitter } from '@angular/core';
import { Logger } from "angular2-logger/core";

@Injectable()
export class EventAggregatorService {
  public $todoOnSaved: EventEmitter<any>;

  constructor() {
    this.$todoOnSaved = new EventEmitter();
  }
}
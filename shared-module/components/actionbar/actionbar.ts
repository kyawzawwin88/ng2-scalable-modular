import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Logger } from "angular2-logger/core";

@Component({
  moduleId: module.id,
  selector: 'app-shared-actionbar',
  templateUrl: 'actionbar.html'
})
export class SharedActionBarComponent implements OnInit {
  @Output() onAddNewClicked = new EventEmitter();
  @Output() onDeleteAllClicked = new EventEmitter();

  constructor(private logger: Logger) {
    this.logger.info("SharedActionBar component has been loaded");
  }

  ngOnInit() { 

  }

  onAddNew($event: any): void {
    this.onAddNewClicked.emit(true);
    this.logger.debug("onAddNew inside actiobar has been triggered");
  }

  onDeleteAll($event: any): void {
    this.onDeleteAllClicked.emit(true);
    this.logger.debug("onDeleteAll inside actiobar has been triggered");
  }
}
import { Injectable } from '@angular/core';
import { Logger } from "angular2-logger/core";

import { LocalStorageService } from 'angular-2-local-storage';
import * as _ from 'lodash';
import { EventAggregatorService } from '../../shared-module/services/eventaggregator';

@Injectable()
export class TodoService {
  private todoList: Array<any> = [];
  constructor(private logger: Logger, private localStorage: LocalStorageService,
    private eventAggregator: EventAggregatorService) {
    this.logger.debug("TodoService has been created");
  }

  public save = (data: any): Array<any> => {
    this.logger.debug("saving todo data");
    if(this.localStorage.get('todoList')) this.todoList = this.getTodoList();
    let todoData = null;
    if(data.id) {
      todoData = _.find(this.todoList, (todo: any): boolean => {
        return todo.id == data.id;
      });

      if(todoData) {
        todoData = data;
      }
    }

    if(todoData == null){
      todoData = data;
      todoData.id = this.todoList.length + 1;
      this.todoList.push(todoData);
    }
    
    this.logger.debug(this.todoList);
    this.localStorage.add('todoList', this.todoList);
    this.eventAggregator.$todoOnSaved.emit(todoData);
    this.logger.debug("Event emitted $todoOnSaved");
    return this.todoList;
  }

  public getTodoList = (): Array<any> => {
    this.logger.debug("getting todo list");
    this.logger.debug(this.localStorage.get('todoList'));
    this.todoList = this.localStorage.get('todoList') || [];
    return this.todoList;
  }

  public getTodo = (id: number): any => {
    this.logger.debug("getting todo item by id - " + id);
    this.todoList = this.localStorage.get('todoList');
    return _.find(this.todoList, (todo: any): boolean => {
      return todo.id == id;
    });
  }

  public deleteAll = (): void => {
    this.logger.debug("Deleting all todo items");
    this.localStorage.remove('todoList');
    this.todoList = [];
    this.eventAggregator.$todoOnSaved.emit("delete all");
  }
}
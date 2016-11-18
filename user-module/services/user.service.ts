import { Injectable } from '@angular/core';
import { Logger } from "angular2-logger/core";

import { LocalStorageService } from 'angular-2-local-storage';
import * as _ from 'lodash';

@Injectable()
export class UserService {
  private userList: Array<any> = [];
  constructor(private logger: Logger, private localStorage: LocalStorageService) {
    this.logger.debug("UserService has been created");
    this.init();
  }

  init(): void {
    if(this.localStorage.get('userList')) this.userList = this.getUserList();
    else {
      this.userList.push({ 
         id: 1,
         name: 'Kyaw Zaw Win',
         count: 0
      });

      this.localStorage.set('userList', this.userList);
    }
  }

  incr(): number {
    let user = _.find(this.userList, (user: any): boolean => { return user.id === 1 });
    user.count++;
    this.logger.debug(this.userList);
    this.localStorage.set('userList', this.userList);
    return user.count;
  }

  decr(): number {
    let user = _.find(this.userList, (user: any): boolean => { return user.id === 1 });
    if(user.count > 0) user.count--;
    this.logger.debug(this.userList);
    this.localStorage.set('userList', this.userList);
    return user.count;
  }

  resetCount(): number {
    let user = _.find(this.userList, (user: any): boolean => { return user.id === 1 });
    user.count = 0;
    this.logger.debug(this.userList);
    this.localStorage.set('userList', this.userList);
    return user.count;
  }

  // public save = (data: any): Array<any> => {
  //   this.logger.debug("saving user data");
  //   if(this.localStorage.get('userList')) this.todoList = this.getTodoList();
  //   let todoData = null;
  //   if(data.id) {
  //     todoData = _.find(this.todoList, (todo: any): boolean => {
  //       return todo.id == data.id;
  //     });

  //     if(todoData) {
  //       todoData = data;
  //     }
  //   }

  //   if(todoData == null){
  //     todoData = data;
  //     todoData.id = this.todoList.length + 1;
  //     this.todoList.push(todoData);
  //   }
    
  //   this.logger.debug(this.todoList);
  //   this.localStorage.add('todoList', this.todoList);
    
  //   return this.todoList;
  // }

  public getUserList = (): Array<any> => {
    this.logger.debug("getting user list");
    this.logger.debug(this.localStorage.get('userList'));
    this.userList = this.localStorage.get('userList');
    return this.userList;
  }

  public getUser = (id: number): any => {
    this.logger.debug("getting user item by id - " + id);
    this.userList = this.localStorage.get('userList');
    return _.find(this.userList, (user: any): boolean => {
      return user.id == id;
    });
  }

  public deleteAll = (): void => {
    this.logger.debug("Deleting all users");
    this.localStorage.remove('userList');
    this.userList = [];
  }
}
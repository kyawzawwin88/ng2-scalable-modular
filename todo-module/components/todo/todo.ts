import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Logger } from "angular2-logger/core";
import { TodoService } from "../../services/todo.service";

import { ToastsManager } from "ng2-toastr/ng2-toastr";

@Component({
  moduleId: module.id,
  selector: 'app-todo-listing',
  templateUrl: 'listing.html'
})
export class TodoComponent implements OnInit {
  public todoList: Array<any> = [];
  constructor(private logger: Logger, private router: Router, 
    private todoService: TodoService, private toastr: ToastsManager) {
    this.logger.info("Todo component has been loaded");
  }

  ngOnInit() { 
    this.todoList = this.todoService.getTodoList();
  }

  onRowClick($event: any, todo: any): void {
    this.logger.debug("onRowClick event has been triggered");
    this.router.navigate(['todo/form', todo.id]);
  }

  onAddNewClicked($event: any): void {
    this.logger.debug("onAddNew event has been triggered");
    this.router.navigate(['todo/form']);
  }

  onDeleteAll($event: any): void {
    this.logger.debug("onDeleteAll event has been triggered");
    this.todoService.deleteAll();
    this.todoList = this.todoService.getTodoList();
    this.toastr.info("All todo items has been deleted");
  }
}

@Component({
  moduleId: module.id,
  selector: 'app-todo-form',
  templateUrl: 'form.html'
})
export class TodoFormComponent implements OnInit {
  public todoData: any = {};
  private paramsSubscriber: any;
  private id: number;
  private url: string;

  constructor(private logger: Logger, private todoService: TodoService, 
    private activeRoute: ActivatedRoute, private toastr: ToastsManager) {
    this.logger.info("Todo form component has been loaded");
    console.log(this.activeRoute.root);
  }

  ngOnInit() { 
    this.paramsSubscriber = this.activeRoute.params.subscribe(p => this.id = p['id']);
    this.activeRoute.root.url.subscribe(url => this.url = url);
    console.log(this.url);
    if(this.id){
      this.todoData = this.todoService.getTodo(this.id);
    }
  }

  onSave($event: any): void {
    this.logger.debug(this.todoData);
    this.todoService.save(this.todoData);
    this.toastr.info("New todo item has been saved");
  }
}
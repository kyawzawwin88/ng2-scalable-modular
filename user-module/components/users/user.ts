import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Logger } from "angular2-logger/core";
import { UserService } from "../../services/user.service";
import { EventAggregatorService } from '../../../shared-module/services/eventaggregator';

@Component({
  moduleId: module.id,
  selector: 'app-user-listing',
  templateUrl: 'listing.html'
})
export class UserComponent implements OnInit, OnDestroy {
  public userList: Array<any> = [];
  constructor(private logger: Logger, private router: Router, 
    private userService: UserService, private eventAggregator: EventAggregatorService) {
    this.logger.info("User component has been loaded");
  }

  ngOnInit() { 
    this.userList = this.userService.getUserList();

    this.logger.debug("Subscribing event $todoOnSaved");
    if(this.eventAggregator.$todoOnSaved.observers.length === 0) {
      this.eventAggregator.$todoOnSaved.subscribe((todo: any) => {
        this.logger.debug("TRIGGERED !");
        this.logger.debug(todo);
        if(todo) {
          if(todo === 'delete all'){
            this.logger.debug("Resetting the todo count");
            this.userService.resetCount();  
          } else {
            this.logger.debug("Increase the todo count");
            this.userService.incr();  
          }
        } else {
          this.logger.debug("Decrease the todo count");
          this.userService.decr();
        }
      });
    }
  }

  ngOnDestroy() {
    this.logger.log("Unsubscribing todo event");
  }

  onRowClick($event: any, todo: any): void {
    this.logger.debug("onRowClick event has been triggered");
    this.router.navigate(['users/form', todo.id]);
  }

  onAddNewClicked($event: any): void {
    this.logger.debug("onAddNewClicked event has been triggered");
    this.router.navigate(['users/form']);
  }
}

// @Component({
//   moduleId: module.id,
//   selector: 'app-user-form',
//   templateUrl: 'form.html'
// })
// export class TodoFormComponent implements OnInit {
//   public todoData: any = {};
//   private paramsSubscriber: any;
//   private id: number;
//   private url: string;

//   constructor(private logger: Logger, private todoService: TodoService, 
//     private activeRoute: ActivatedRoute) {
//     this.logger.info("Todo form component has been loaded");
//     console.log(this.activeRoute.root);
//   }

//   ngOnInit() { 
//     this.paramsSubscriber = this.activeRoute.params.subscribe(p => this.id = p['id']);
//     this.activeRoute.root.url.subscribe(url => this.url = url);
//     console.log(this.url);
//     if(this.id){
//       this.todoData = this.todoService.getTodo(this.id);
//     }
//   }

//   onSave($event: any): void {
//     this.logger.debug(this.todoData);
//     this.todoService.save(this.todoData);
//   }
// }
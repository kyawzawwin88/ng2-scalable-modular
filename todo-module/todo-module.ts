import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TodoComponent, TodoFormComponent } from './components/todo/todo';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared-module/shared-module';
import { TodoService } from "./services/todo.service";

import { ToastModule, ToastsManager } from "ng2-toastr/ng2-toastr";
console.log(ToastModule);
const routes = [
  { 
    path: '',
    component: TodoComponent
  },
  { 
    path: 'form',
    component: TodoFormComponent
  },
  { 
    path: 'form/:id',
    component: TodoFormComponent
  }
];

@NgModule({
  declarations: [
    TodoComponent,
    TodoFormComponent
  ],
  providers: [ TodoService ],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    ToastModule,
    RouterModule.forChild(routes)
  ]
})
export default class TodoModule {}
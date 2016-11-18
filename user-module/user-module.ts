import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { UserComponent } from './components/users/user';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared-module/shared-module';
import { UserService } from "./services/user.service";

const routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'users',
    component: UserComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent,
    UserComponent
  ],
  providers: [ UserService ],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export default class UserModule {}
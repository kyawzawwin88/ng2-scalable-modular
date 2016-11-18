import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Logger } from "angular2-logger/core";

// import { APIService } from '../../services/apiservice';
// import { LoginRequest } from "../../requests/LoginRequest";
// import { LoginModel } from "../../models/Login";
// import { LocalStorage } from "../../../common/utils/angular2-local-storage/local_storage";

// import { ToastModule, ToastsManager } from "ng2-toastr/ng2-toastr";

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.html'
  // styleUrls: ['login.css']
})
export class LoginComponent implements OnInit {
  public email: string = 'user@email.com';
  public password: string = 'password';
  constructor(private logger: Logger, private router: Router) {
    this.logger.info("Login component has been loaded");
  }

  ngOnInit() { 

  }
  
  onLogin($event: any): void {
    this.logger.debug('onLogin event has been triggered');
    this.router.navigate(['/todo']);
  //   this.apiService
  //     .login(this.loginRequest)
  //     .subscribe(
  //       (data: LoginModel) => {
  //         this.login = data;
  //       },
  //       error => {
  //         this.logger.error(error);
  //         this.toastr.error(error.message);
  //       },
  //       () => {
  //         this.logger.debug(this.login);
  //         this.localstorage.set("loggedInUser", JSON.stringify(this.login));
  //         this.router.navigate(['/dashboard']);
  //         this.logger.log('Login completed');
  //       }
  //     );
  
  }
}
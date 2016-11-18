import { Component } from '@angular/core';

@Component({
  selector: 'ng2-app',
  template: '<app-header></app-header><router-outlet></router-outlet>'
})

export class App { 
  constructor() {
    console.log("Ng2App Component has been loaded");
  }
}
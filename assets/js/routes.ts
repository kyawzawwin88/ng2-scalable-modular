import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    loadChildren: 'user-module/user-module'
  },
  {
    path: 'todo',
    loadChildren: 'todo-module/todo-module'
  }
]; 

export const AppRouteProvider: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
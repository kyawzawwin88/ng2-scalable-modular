import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedActionBarComponent } from './components/actionbar/actionbar';

@NgModule({
  declarations: [
    SharedActionBarComponent
  ],
  providers: [ ],
  imports: [
    FormsModule
  ],
  exports:      [ 
    FormsModule,
    SharedActionBarComponent
  ]
})
export class SharedModule {
  
}

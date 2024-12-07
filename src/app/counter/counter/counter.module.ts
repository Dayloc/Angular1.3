import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponentComponent } from './components/counter-component/counter-component.component';



@NgModule({
  declarations: [
    CounterComponentComponent
  ],
  exports: [
    CounterComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CounterModule { }

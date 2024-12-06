import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzComponent } from './pages/main-dbz.component';



@NgModule({
  declarations: [DbzComponent],
  exports: [DbzComponent],  // Make DbzComponent available for other modules to import and use it in their components.
  imports: [
    CommonModule
  ]
})
export class DbzModule { }

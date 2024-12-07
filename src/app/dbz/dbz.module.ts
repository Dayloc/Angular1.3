import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzComponent } from './pages/main-dbz.component';
import { ListadoComponent } from './components/listado/listado.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DbzComponent, ListadoComponent, AgregarComponent],
  exports: [DbzComponent], // Make DbzComponent available for other modules to import and use it in their components.
  imports: [CommonModule, FormsModule],
})
export class DbzModule {}

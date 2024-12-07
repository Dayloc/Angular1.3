import { Component, EventEmitter, Output, output } from '@angular/core';
import { Personaje } from '../../interfaces/personajes.interface';

@Component({
  selector: 'app-agregar',
  standalone: false,

  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css',
})
export class AgregarComponent {
  @Output()
  public onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

  public personaje: Personaje = {
    name: '',
    power: 0,
  };

  public agregarPersonaje() {
    this.onNewPersonaje.emit({ ...this.personaje });

    console.log(this.personaje);
    
    this.personaje.name = '';
    this.personaje.power = 0;
  }
}

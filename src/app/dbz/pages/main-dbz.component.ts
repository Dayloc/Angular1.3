import { Component } from '@angular/core';
import { Personaje } from '../interfaces/personajes.interface';

@Component({
  selector: 'app-dbz-component',
  templateUrl: './main-dbz.component.html',
  standalone: false,
})
export class DbzComponent {
  public personajes: Personaje[] = [
    {
      name: 'Goku',
      power: 1000,
    },
    {
      name: 'Vegeta',
      power: 800,
    },
    {
      name: 'Trunks',
      power: 700,
    },
    {
      name: 'Piccolo',
      power: 600,
    },
    {
      name: 'Gohan',
      power: 500,
    },
  ];

  onNewPersonaje(personaje: Personaje): void {
    this.personajes.push(personaje);
    console.log(personaje);
  }
}

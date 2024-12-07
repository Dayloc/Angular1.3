import { Component, Input } from '@angular/core';
import { Personaje } from '../../interfaces/personajes.interface';

@Component({
  selector: 'app-listado',
  standalone: false,

  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

  @Input()
  public ListaPersonajes:Personaje[]=[{
    name: 'Spiderman',
    power: 300
  },
  {
    name: 'Batman',
    power: 1000
  },
  {
    name: 'Hulk',
    power: 800
  },
  {
    name: 'Ironman',
    power: 1500
  },
  {
    name: 'Thor',
    power: 10000
  }



]

}

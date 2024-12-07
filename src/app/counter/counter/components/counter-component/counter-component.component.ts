import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  standalone: false,

  templateUrl: './counter-component.component.html',
  styleUrl: './counter-component.component.css'
})
export class CounterComponentComponent {
  public contador:number=10;
  public incrementar(): void {
    this.contador++;
  }
  public decrementar(): void {
    this.contador--;
  }
public reset():void{
  this.contador=10;
}
}

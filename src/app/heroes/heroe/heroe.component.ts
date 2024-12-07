import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  standalone: false,

  templateUrl: './heroe.component.html',

})
export class HeroeComponent {
  public heroe:string='Ironman';
  public age:number=45;

  public cambiarHeroe():void{
    if(this.heroe==='Ironman'){
      this.heroe='Spiderman';
    }
  }
  public cambiarAge():void{
    if(this.age===45){
      this.age=30;
    }
  }
  public volver():void{
    this.heroe='Ironman';
    this.age=45;
  }

}

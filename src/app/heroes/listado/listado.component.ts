import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  standalone: false,

  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  public heroesList:string[]=['Ironman','Hulk', 'Spiderman','Superman','Thor','Batman' ];
  public deleted?:string =''
  public heroesEliminados:string[]=[]
  public deleteUltimoHeroe():void{
     this.deleted=this.heroesList.pop();
     this.agregarHeroe();
  };
  public agregarHeroe():void{
    if(this.deleted){
      this.heroesEliminados.push(this.deleted);
      console.log(this.heroesEliminados)
    }

  };

  public resetListado():void{
    this.heroesList=['Ironman','Hulk', 'Spiderman','Superman','Thor','Batman' ];
    this.heroesEliminados=[]
  }

}

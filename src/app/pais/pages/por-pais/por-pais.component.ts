import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino : string ='';
  constructor(private paisServices:PaisService) { }

  buscar(){
    console.log(this.termino);
    this.paisServices.buscarPais(this.termino).subscribe(res=>{
      console.log(res);
    });
  }
  

}

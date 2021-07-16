import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(
    private activatedRaute: ActivatedRoute,
    private paisServicio : PaisService
    ) { }

  ngOnInit(): void {
    this.activatedRaute.params
    .subscribe(({id}) =>{
      console.log(id);

      this.paisServicio.getPaisPorAlpha(id)
      .subscribe(pais=>{
        console.log("El pais es ",pais);
      })
    })
  }

}

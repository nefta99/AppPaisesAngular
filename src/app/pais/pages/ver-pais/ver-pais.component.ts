import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap,tap} from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais! : Country;


  constructor(
    private activatedRaute: ActivatedRoute,
    private paisServicio : PaisService
    ) { }

  ngOnInit(): void {

    this.activatedRaute.params
    .pipe(
      switchMap(({id})=>this.paisServicio.getPaisPorAlpha(id)),
      tap(console.log)
    )
    .subscribe(pais=>this.pais=pais    );

    // this.activatedRaute.params
    // .subscribe(({id}) =>{
    //   console.log(id);

    //   this.paisServicio.getPaisPorAlpha(id)
    //   .subscribe(pais=>{
    //     console.log("El pais es ",pais);
    //   })
    // })
  }

}

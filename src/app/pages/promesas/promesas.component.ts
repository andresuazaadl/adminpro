import { Component, OnInit } from '@angular/core';
import { reject } from 'q';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contarTres().then( mensaje => console.log("Termino!", mensaje))
            .catch( error => console.error("Errror en la promesa", error));

  }

  contarTres(){
    let promesa = new Promise( (resolve , reject) => {

      let contador = 0;

      setInterval(() => {

        contador+=1;

        if( contador == 3){
          resolve("OK!");
        }

      }, 1000);
    });

    return promesa;
  }

  ngOnInit() {
  }

}

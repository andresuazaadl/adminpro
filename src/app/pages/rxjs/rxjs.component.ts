import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  suscription: Subscription;

  constructor() {

    //this.regresaObservable().pipe( retry(2) )
    this.suscription = this.regresaObservable().pipe()
    .subscribe( 
      numero => console.log("sub", numero),
      error =>  console.error("error en el obs", error),
      () => console.log("el observador a terminado")
    );

  }

  ngOnInit() {
  }

  ngOnDestroy(){
    console.log("la pagina se va a cerrar");
    this.suscription.unsubscribe();
  }

  regresaObservable(): Observable<any>{

    return new Observable( observer => {

      let contador = 0;

      let intervalo = setInterval(() => {
        contador+=1

        const salida = { valor: contador };

        observer.next( salida );

        // if(contador === 3) {
        //   //clearInterval(intervalo);
        //   observer.complete();
        // }

        // if(contador === 2){
        //   clearInterval(intervalo);
        //   observer.error("auxilio!!");
        // }

      }, 1000);

    }).pipe(
      map( resp => resp.valor ),
      filter( (valor, index) => {

        if( (valor % 2) === 1 ){
          //IMPAR
          return true;
        } else {
          //PAR
          return false;
        }

      })
    );

  }
}

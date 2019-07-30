import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress', {static: false}) txtProgress: ElementRef;

  @Input('nombre') leyenda : string = 'Leyenda';
  @Input() progreso : number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  cambiarValor(valor){
    if ( this.progreso+valor > 100) {
      return;
    }
    if ( this.progreso+valor < 0) {
      return;
    }
    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso);
  }

  onChanges( newValue: number){
    console.log('newValue', newValue);
    if(newValue > 100){
      newValue = 100;
    } else if (newValue < 0 || newValue === null){
      newValue = 0;
    } else {
      this.progreso = newValue;
    }

    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit(this.progreso);

    this.txtProgress.nativeElement.focus();
  }
}

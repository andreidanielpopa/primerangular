import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tablamultiplicar',
  templateUrl: './tablamultiplicar.component.html',
  styleUrl: './tablamultiplicar.component.css'
})
export class TablamultiplicarComponent {

  @ViewChild('cajanumero') cajaNumeroRef: ElementRef;

  public num: number;
  public index: Array<number>;

  constructor() {
    this.num = 0;
    this.index = new Array<number>();
    this.cajaNumeroRef = new ElementRef(0);
  }

  multiplicar(): void {
    this.num = this.cajaNumeroRef.nativeElement.value;
  }

}

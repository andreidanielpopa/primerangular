import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-tablamultiplicar',
    templateUrl: './tablamultiplicar.component.html',
    styleUrl: './tablamultiplicar.component.css'
})
export class TablamultiplicarComponent {

    @ViewChild('cajanumero') cajaNumeroRef!: ElementRef;

    public num: number;
    public index: Array<number>;

    constructor() {
        this.num = 0;
        this.index = new Array<number>();
    }

    multiplicar(): void {
        let aux = new Array<number>();
        this.num = this.cajaNumeroRef.nativeElement.value;
        for (var i = 1; i <= 10; i++) {
            var resultado = this.num * i;
            aux.push(resultado);
        }
        this.index = aux;
    }

}

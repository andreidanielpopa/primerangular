import { Component } from "@angular/core";

@Component({
    selector: 'app-deportes',
    templateUrl: './deportes.component.html',
    styleUrl: './deportes.component.css'
})

export class DeportesComponent {
    public deportes: Array<string>;
    public numeros: Array<number>;
    constructor() {
        this.deportes = ['Basket', 'Furbol', 'Lol', 'Padel', 'Baloncesto', 'Tenis', 'Golf']
        this.numeros = [7, 2, 9, 4, 1, 3, 10, 8, 5, 6]
    }
}
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Suma } from 'src/app/interfaces/suma';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  public suma: Suma;
  public verde:string="color:green";
  public rojo:string="color:red";

  public color:string=this.verde;
  constructor() { 
    this.suma = { sumando1:0 , sumando2:0, resultado:0 };
  }
  
  ngOnInit(): void {
  }

  public calcular():void{
    console.log("Calculando...");
    this.suma.resultado = this.suma.sumando1 + this.suma.sumando2;
    this.determinarColor();
  }

  private determinarColor() {
    this.color = this.suma.resultado > 0 ? this.verde : this.rojo;
  }
}

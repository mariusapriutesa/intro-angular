import { ICarta } from "./carta";


export class Juego{


private readonly numeros: string[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
private readonly figuras: string[] = ['C', 'D', 'H', 'S'];
private _mazo: ICarta[] = [];
/*
*
**/


constructor(){
this.generarMazo();
this._mazo=this.barajarMazo();  

}
public get mazo():ICarta[]{
    return this._mazo;
}
/**
 * 
 * 
 */
private generarMazo(){

    for(let numero of this.numeros){
        for(let figura of this.figuras){
                this.mazo.push({key: numero + figura, value: this.calcularValorCarta(numero)});
        }
    }


}
private calcularValorCarta = (numero: string):number => {
    switch(numero)
    {
        case 'A': return 11;
        case 'J':
        case 'Q':
        case 'K': return 10;
        default: return Number.parseInt(numero);
    }
}

public  barajarMazo = (): ICarta[] =>{
   
      return this.mazo.sort((a: ICarta, b: ICarta): number => Math.random() - 0.5);
  }
}
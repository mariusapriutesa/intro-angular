import { Component, Input, OnInit } from '@angular/core';
import { ICarta } from '../domain/carta';
import { Juego } from '../domain/juego';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
//variables
export class DashboardComponent implements OnInit {
  @Input() valor: string  ='';
  cartaUsuario:ICarta[]=[];
  cartaCpu:ICarta[]=[];
  contadorPlayer =0;
  contadorCpu =0;

esJuegoTerminado=false;

  juego: Juego;
  
esTurnoCpu=false;

  
  constructor() {
    this.juego= new Juego();
console.log(this.juego.mazo);
//this.cartaUsuario.push (this.juego.mazo.pop() as ICarta);//mesaca una carta del mazo , lo elimina , y lo agrego al usuario



   }

  ngOnInit(): void {
    Swal.fire({
      title: 'escribe tu nombre',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Look up',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        this.valor=login;
         
      }
    })
    //this.valor= prompt('Entre el nombre') as string;
  }


onReluadCardClick(event:Event):void{
 this.juego=new Juego();
 this.cartaUsuario= [];//las cartas igual a un array vacio
 this.cartaCpu=[];
 this.contadorCpu=0;
  this.contadorPlayer= 0;
  this.esTurnoCpu=false;
 this.esJuegoTerminado=false;
}  

onStopClick():void{

  this.esTurnoCpu=true;
  this.turnoCpu();

}


onGetCardClick(event:Event):void {//obtener carta del mazo button metod

const carta= this.juego.mazo.pop();

if(carta){
  this.cartaUsuario.push(carta as ICarta);//cartaPlayer
  this.contadorPlayer= this.contadorPlayer+=carta?.value;

if(this.contadorPlayer>21){
 this.onStopClick();

}


}else{
  alert('El mazo esta vacio')
 
}

  }

  private turnoCpu():void{
    do
    {
        const carta = this.juego.mazo.pop();
        if(carta){
            this.contadorCpu += carta.value;
           this.cartaCpu.push(carta);
        }
    }while(this.contadorPlayer <= 21 && this.contadorCpu < this.contadorPlayer)
    this.esJuegoTerminado= true;

    setTimeout(() =>{
        if((this.contadorCpu > this.contadorPlayer && this.contadorCpu <= 21) || this.contadorPlayer > 21)
        {
          Swal.fire(
            'HAS PERDIDO :((',
            'Quieres jugar otravez?',
            'error'
          )
          
        }
        else
        {
          Swal.fire(
            'HAS GANADO :))',
            'Quieres jugar otravez?',
            'success'
          )
        }
    }, 300);
}
}

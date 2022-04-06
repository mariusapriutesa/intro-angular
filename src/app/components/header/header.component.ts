import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , OnDestroy{
texto='He puesto un texto';
@Input() valor: string  ='';

 @Output() mesajeEnviado= new EventEmitter<string>();      //EventEmiter angular@core//metodo para enviar un element de tipo string

  constructor() { 
    console.log('El componente fue construido')

  }

  onButtonClick():void{//creamos el metodo  para enviar un mesaje
  
    this.mesajeEnviado.emit(`${this.valor} ha hecho clik en el button`);

  }


  ngOnInit(): void {

    console.log('El componente fue inicializado')

  }
  ngOnDestroy(): void {
    
 

    throw new Error('El componente ha sido destroido');

  }
}

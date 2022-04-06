import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-header [valor]="nombre"
  (mesajeEnviado)="onMesajeEnviado($event)"
  ></app-header>  

  <app-dashboard [valor]=nombre></app-dashboard>
  `
})
  

export class AppComponent {
  nombre = 'Marius Apriutesa'; 

  @Input()datosEnviados='';    
  onMesajeEnviado(evento:String): void{
    console.log(evento); //print el event

  } //para capturar el mesaje 
}

import { Component, Input, OnInit } from '@angular/core';
import { ICarta } from '../domain/carta';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() valor: string  ='';
  @Input() cartas:ICarta[]=[];
 @Input() contador= 0;   //imput es para enviar el valor


  constructor() { } 

  ngOnInit(): void {
    
  }

}

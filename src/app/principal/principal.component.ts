import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  exemplos = [
    { nome: 'fxLayout e fxFlex', rota: ['/exemplo1'] },
    { nome: 'fxLayoutGap e fxFlexOffset', rota: ['/exemplo2'] },
    { nome: 'Breakpoints', rota: ['/exemplo3'] },
    { nome: 'MediaObserver', rota: ['/exemplo4'] }
  ];

  constructor() { }

  ngOnInit() {
  }

}

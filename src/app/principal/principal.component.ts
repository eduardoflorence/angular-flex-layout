import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  exemplos = [
    { nome: 'Diretivas básicas', rota: ['/exemplo1'] },
    { nome: 'Exemplo prático', rota: ['/exemplo2'] },
    { nome: 'Breakpoints', rota: ['/exemplo3'] },
    { nome: 'MediaObserver', rota: ['/exemplo4'] },
    { nome: 'Grid', rota: ['/exemplo5'] },
    { nome: 'Custom Breakpoints', rota: ['/exemplo6'] }
  ];

  constructor() { }

  ngOnInit() {
  }

}

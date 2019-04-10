import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo3',
  templateUrl: './exemplo3.component.html',
  styleUrls: ['./exemplo3.component.scss']
})
export class Exemplo3Component implements OnInit {

  usuarios = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() { }

  ngOnInit() {
  }

}

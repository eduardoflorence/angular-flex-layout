import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-exemplo4',
  templateUrl: './exemplo4.component.html',
  styleUrls: ['./exemplo4.component.scss']
})
export class Exemplo4Component implements OnInit, OnDestroy {

  watcher: Subscription;

  vendas = [
    {produto: 'Móveis', janeiro: 2530.26, fevereiro: 1212.14, marco: 5624.01},
    {produto: 'Eletrônicos', janeiro: 3242.33, fevereiro: 4442.34, marco: 11234.65},
    {produto: 'Celulares', janeiro: 3453.78, fevereiro: 23432.65, marco: 4356.79},
    {produto: 'Eletrodoméstico', janeiro: 78978.33, fevereiro: 5557.19, marco: 5657.81},
    {produto: 'Vestuário', janeiro: 7453.44, fevereiro: 8454.16, marco: 9832.41},
  ];
  labels = ['Produtos', 'Janeiro', 'Fevereiro', 'Março'];
  colunasVendas = ['produto', 'janeiro', 'fevereiro', 'marco'];
  colunas = [];
  indexColuna = 1;

  constructor(public mediaObserver: MediaObserver) {}

  ngOnInit() {
    this.watcher = this.mediaObserver.asObservable().subscribe(
      (changes: MediaChange[]) => {
        console.log(changes);
        if (changes.some(change => change.mqAlias === 'xs')) {
          this._setMobileContent();
        } else {
          this._setDesktopContent();
        }
      }
    );
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

  private _setMobileContent(): void {
    this.colunas = [this.colunasVendas[0], this.colunasVendas[this.indexColuna]];
  }

  private _setDesktopContent(): void {
    this.colunas = this.colunasVendas;
  }

  mesAvanca(): void {
    this.indexColuna++;
    this._setMobileContent();
  }

  mesRetrocede(): void {
    this.indexColuna--;
    this._setMobileContent();
  }


}

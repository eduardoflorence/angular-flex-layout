import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-exemplo6',
  templateUrl: './exemplo6.component.html',
  styleUrls: ['./exemplo6.component.scss']
})
export class Exemplo6Component implements OnInit, OnDestroy {

  watcher: Subscription;
  activeBreakpoint: any;

  constructor(public mediaObserver: MediaObserver) { }

  ngOnInit() {
    this.watcher = this.mediaObserver.asObservable().subscribe(
      (changes: MediaChange[]) => {
        this.activeBreakpoint = changes.map((change) => change.mqAlias).join(', ');
      }
    );
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

}

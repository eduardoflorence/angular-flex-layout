import { Directive } from '@angular/core';
import { ShowHideDirective } from '@angular/flex-layout';

const selector = '[fxHide.smd], [fxHide.lt-smd], [fxHide.gt-smd], [fxShow.smd], [fxShow.lt-smd], [fxShow.gt-smd]';

const inputs = [
  'fxHide.smd',
  'fxHide.lt-smd',
  'fxHide.gt-smd',
  'fxShow.smd',
  'fxShow.lt-smd',
  'fxShow.gt-smd'
];

// tslint:disable-next-line:use-input-property-decorator
@Directive({selector, inputs})
export class CustomShowHideDirective extends ShowHideDirective {
  protected inputs = inputs;
}

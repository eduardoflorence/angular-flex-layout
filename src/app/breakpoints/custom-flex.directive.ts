import { Directive } from '@angular/core';
import { FlexDirective } from '@angular/flex-layout';

const selector = `[fxFlex.smd],
                  [fxFlex.lt-smd],
                  [fxFlex.gt-smd]`;
const inputs = ['fxFlex.smd',
                'fxFlex.lt-smd',
                'fxFlex.gt-smd'
];

// tslint:disable-next-line:use-input-property-decorator
@Directive({ selector, inputs })
export class CustomFlexDirective extends FlexDirective {
  protected inputs = inputs;
}

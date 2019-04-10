import { BREAKPOINT } from '@angular/flex-layout';

const CUSTOM_BREAKPOINTS = [
  {
    alias: 'smd',
    suffix: 'SMd',
    mediaQuery: 'screen and (min-width: 769px) and (max-width: 1024px)',
    overlapping: false
  },
  {
    alias: 'lt-smd',
    suffix: 'LtSMd',
    mediaQuery: 'screen and (max-width: 1024px)',
    overlapping: false
  },
  {
    alias: 'gt-smd',
    suffix: 'GtSMd',
    mediaQuery: 'screen and (min-width: 1025px)',
    overlapping: false
  }
];

export const CustomBreakPointsProvider = {
  provide: BREAKPOINT,
  useValue: CUSTOM_BREAKPOINTS,
  multi: true
};

import { trigger, state, style, animate, transition } from '@angular/animations';

export const growIn = trigger('growIn', [
  state('void', style({
    height: '0',
    opacity: 0
  })),
  transition('void <=> *', [
    animate('0.3s ease')
  ])
]);

export const shrinkOut = trigger('shrinkOut', [
  state('*', style({
    height: '*',
    opacity: 1
  })),
  transition('* <=> void', [
    animate('0.3s ease')
  ])
]);

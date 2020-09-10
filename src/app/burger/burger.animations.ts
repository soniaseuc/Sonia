// DESABILITADO
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

import { EASING } from '../app.constants';

export function burgerLineAnimation(name: string, translateY = '15px', rotateFinal = '45deg', rotateOver = '65deg'): any {
    return trigger(name, [
      // opened state, in center, rotated, expanded
      state('true', style({
        transform: `translateY(${translateY}) translateX(17.5px) rotate(${rotateFinal})`,
        width: '40px'
      })),

      // closed to open
      transition('false => true', [
        // move to center
        animate(`100ms ${EASING}`, style({
          transform: `translateY(${translateY})`
        })),
        // expand from dot to line
        animate(`100ms ${EASING}`, style({
          width: '40px',
          transform: `translateY(${translateY}) translateX(17.5px)`
        })),
        // rotate over
        animate(`80ms ${EASING}`, style({
          transform: `translateY(${translateY}) translateX(17.5px) rotate(${rotateOver})`
        })),
        // rotate final
        animate(`150ms ${EASING}`, style({
          transform: `translateY(${translateY}) translateX(17.5px) rotate(${rotateFinal})`
        }))
      ]),

      // open to closed
      transition('true => false', [
        // level and shrink
        animate(`100ms ${EASING}`, style({
          transform: `translateY(${translateY}) translateX(0) rotate(0deg)`,
          width: '5px'
        })),
        // move to proper position
        animate(`100ms ${EASING}`, style({
          transform: 'translateY(0)'
        }))
      ])
    ]);
  }

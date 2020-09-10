// DESABILITADO
import {
    trigger,
    state,
    style,
    animate,
    transition,
    query,
    stagger
  } from '@angular/animations';

import { EASING } from '../app.constants';

export function menuAnimation(): any {
    return trigger('state', [
      // closed
        state('false', style({
            display: 'none'
        })),

      // opened
        state('true', style({
            display: 'block'
        })),

      // opening transition
        transition('false => true', [
            // select all items
            query('.__item', [
                // set their pre-anim style
                style({
                    opacity: 0,
                    transform: 'translateX(10px)'
                }),
                // animated with 20ms stagger before each next item
                stagger('-20ms', [
                    animate(`100ms ${EASING}`, style({
                    opacity: 1,
                    transform: 'translateX(0)'
                    }))
                ])
            ])
        ]),
        // closing transition
        transition('true => false', [
            // select all items
            query('.__item', [
            // animated with 20ms stagger before each next item
                stagger('20ms', [
                    animate(`100ms ${EASING}`, style({
                        opacity: 0,
                        transform: 'translateX(10px)'
                    }))
                ])
            ])
        ])
    ]);
}

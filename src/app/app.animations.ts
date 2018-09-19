import { style, animate, stagger, AnimationMetadata, query, useAnimation } from '@angular/animations';
import { pulse, rollIn, rollOut, zoomIn, zoomOut, fadeOut, flipInY, flipOutY } from 'ng-animate';

export const flipInStagger = [
    style({ transform: 'rotateX(90deg)' }),
    stagger(25, animate('300ms', style({ transform: 'rotateX(0)' })))
];

export const aboutAnimationIn: AnimationMetadata[] = [
    query('h1, .skills h4, .avatar, .whoami p, .whoami h4, i, .resume', style({ opacity: 0 })),
    query('h1, .skills h4, .whoami p, .whoami h4, .resume', useAnimation(zoomIn, { params: { timing: .3 } })),
    query('.avatar', useAnimation(flipInY, { params: { timing: .3 } })),
    query('i', stagger(25, useAnimation(rollIn, { params: { timing: .3 } }))),
    query('.resume', useAnimation(pulse, { params: { timing: .3, delay: 5 } }))
];

export const aboutAnimationOut: AnimationMetadata[] = [
    query('h1, .skills h4, .avatar, .whoami p, .whoami h4, i, .resume', style({ opacity: 1 })),
    query('h1, .skills h4', useAnimation(zoomOut, { params: { timing: .15 } })),
    query('.resume', useAnimation(zoomOut, { params: { timing: .15 } })),
    query('.avatar', useAnimation(flipOutY, { params: { timing: .15 } })),
    query('.whoami p, .whoami h4', useAnimation(fadeOut, { params: { timing: .15 } })),
    query('i', useAnimation(rollOut, { params: { timing: .15 } }))
];

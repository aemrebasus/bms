import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  animateChild,
  group,
  // ...
} from '@angular/animations';
import { RouterOutlet } from '@angular/router';

const openState = state(
  'open',
  style({
    opacity: 0.7,
    backgroundColor: 'yellow',
  })
);

const closedState = state(
  'closed',
  style({
    opacity: 0.4,
    backgroundColor: 'blue',
  })
);

const openToCloseTransition = transition('open => closed', [animate('1s')]);

const closedToOpenTransition = transition('closed => open', [animate('2s')]);

export const slideInAnimation = trigger('routeAnimations', [
  transition('ConfigPage <=> DashboardPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'relative',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('300ms ease-out', style({ left: '100%' }))]),
      query(':enter', [animate('300ms ease-out', style({ left: '0%' }))]),
    ]),
    query(':enter', animateChild()),
  ]),
  // transition('* <=> FilterPage', [
  //   style({ position: 'relative' }),
  //   query(':enter, :leave', [
  //     style({
  //       position: 'relative',
  //       top: 0,
  //       left: 0,
  //       width: '100%',
  //     }),
  //   ]),
  //   query(':enter', [style({ left: '-100%' })]),
  //   query(':leave', animateChild()),
  //   group([
  //     query(':leave', [animate('200ms ease-out', style({ left: '100%' }))]),
  //     query(':enter', [animate('300ms ease-out', style({ left: '0%' }))]),
  //   ]),
  //   query(':enter', animateChild()),
  // ]),
]);

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  animations: [slideInAnimation],
})
export class AdminComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
}

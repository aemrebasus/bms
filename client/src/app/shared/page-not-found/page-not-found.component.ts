import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit, OnDestroy {
  status = 404;
  subscriptions: Subscription[] = [];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const routerSubscription = this.activatedRoute.data.subscribe((data) => {
      this.status = data.status;
    });

    this.subscriptions.push(routerSubscription);
  }

  ngOnDestroy(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}

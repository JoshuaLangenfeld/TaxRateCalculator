import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
  <mat-toolbar>
  <button *ngFor="let r of routes" mat-button [routerLink]="r.path">
    {{ r?.path?.toUpperCase() }}
  </button>
  </mat-toolbar>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  routes: Routes;

  constructor(private _router: Router) {
  }

  ngOnInit(): void {

    this.routes = this._router.config.filter(f =>  {
      const path = f?.path;
      if (!path) return false;

      if (path === '**') return false;

      return true;
    });
  }

}

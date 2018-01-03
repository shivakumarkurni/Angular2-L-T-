import { Component } from '@angular/core';
import {  Pipe } from '@angular/core';


import { Activity1Component } from './components/activity1/activity1.component';
import { Activity2Component } from './components/activity2/activity2.component';
import { Activity3Component } from './components/activity3/activity3.component';

import { Node } from '@angular/compiler';

@Component({
  selector: 'app',
  template: `
  
    <nav>
      <a routerLink="/Activity1">Activity1</a>
      <a routerLink="/Activity2">Activity2</a>
      <a routerLink="/Activity3">Activity3</a>
    </nav>
    <router-outlet></router-outlet>
    <router-outlet name="popup"></router-outlet>
   `
})


export class AppComponent {}


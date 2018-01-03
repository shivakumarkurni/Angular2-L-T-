import { NgModule } from '@angular/core';
// import {  Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from  '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import {Activity1Component} from './components/activity1/activity1.component';
import {Activity2Component} from './components/activity2/activity2.component';
import {Activity3Component} from './components/activity3/activity3.component';

const  Routes=[
  { path:'Activity1', component: Activity1Component, pathmatch:'full'  },
  { path:'Activity2', component: Activity2Component },
  { path:'Activity3', component: Activity3Component }
];

@NgModule({
  declarations: [
    AppComponent,Activity1Component,Activity2Component,Activity3Component
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(Routes),HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

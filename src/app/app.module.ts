import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PoepleComponent } from './poeple/poeple.component';
import { FormsComponent } from './forms/forms.component';
import { CardComponent } from './card/card.component';

const appRoutes = [
  { path: 'app-main', component: MainComponent },
  { path: 'app-people', component: PoepleComponent},
  { path: 'app-forms', component: FormsComponent },

]
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PoepleComponent,
    FormsComponent,
    CardComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

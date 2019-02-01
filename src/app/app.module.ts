import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PoepleComponent } from './poeple/poeple.component';
import { FormsComponent } from './forms/forms.component';
import { CardComponent } from './card/card.component';
import { PeopleService } from './services/people.service';
import { SortingService } from './sorting/sorting.service';
import { EditPageComponent } from './edit-page/edit-page.component';
import { EditingService } from './editing-service/editing.service';
import { FormsModule } from '@angular/forms';
import {SearchService} from './search/search.service';

const appRoutes = [
  { path: 'editing', component: EditPageComponent },
  { path: '', redirectTo: '/app-people', pathMatch: 'full' },
  { path: 'app-main/:name', component: MainComponent },
  { path: 'app-people', component: PoepleComponent},
  { path: 'app-forms', component: FormsComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PoepleComponent,
    FormsComponent,
    CardComponent,
    EditPageComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [
    PeopleService,
    SortingService,
    EditingService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

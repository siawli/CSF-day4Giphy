import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search.component';
import { ResultsComponent } from './components/results.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GiphyService } from './services/giphy.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule, FormsModule, 
    ReactiveFormsModule, HttpClientModule
  ],
  providers: [GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

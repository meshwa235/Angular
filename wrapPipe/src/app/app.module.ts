import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { wrapPipe } from './app.wrap';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    wrapPipe,
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

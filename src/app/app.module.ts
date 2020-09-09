import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ShowModalComponent } from './components/showmodal/showModal.component';
import { ShowemailComponent } from './components/showemail/showemail.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ShowModalComponent,
    ShowemailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

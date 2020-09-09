import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ShowModalComponent } from './components/showmodal/showModal.component';
import { ShowemailComponent } from './components/showemail/showemail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BurgerComponent } from './burger/burger.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ShowModalComponent,
    ShowemailComponent,
    NavbarComponent,
    BurgerComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ShowModalComponent } from './components/showmodal/showmodal.component';
import { ShowemailComponent } from './components/showemail/showemail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BurgerComponent } from './burger/burger.component';
import { MenuComponent } from './menu/menu.component';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ShowModalComponent,
    ShowemailComponent,
    NavbarComponent,
    BurgerComponent,
    MenuComponent,
    MenuButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// DESABILITADO
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';

/**
 * @title Menu with icons
 */

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  constructor() { }

  ngOnInit(): void {
  }

  someMethod(): void {
    this.trigger.openMenu();
  }
}



// @Component({
//   selector: 'menu-icons-example',
//   templateUrl: 'menu-icons-example.html',
// })
// export class MenuIconsExample {}

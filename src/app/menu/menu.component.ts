import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { menuAnimation } from './menu.animations';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [ menuAnimation() ]
})
export class MenuComponent implements OnInit {

  @Input()
  expanded: boolean;

  @Input()
  items: any; // string[];

  @Output()
  itemClick = new EventEmitter<void>(false);

  constructor() { }

  ngOnInit(): void {
  }

}

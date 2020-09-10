// DESABILITADO
import { Component, OnInit, Input } from '@angular/core';
import { burgerLineAnimation } from './burger.animations';

@Component({
  selector: 'burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss'],
  animations: [
    burgerLineAnimation('firstLine'),
    burgerLineAnimation('thirdLine', '-15px', '-45deg', '-60deg')
  ]
})
export class BurgerComponent implements OnInit {
  @Input()
  open: boolean;

  @Input()
  color = '#000';

  constructor() { }

  ngOnInit(): void {
  }

}

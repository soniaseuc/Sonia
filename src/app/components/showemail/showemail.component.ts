// DESABILITADO
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showemail',
  template: ``,
  styleUrls: ['./showemail.component.scss']
})
export class ShowemailComponent implements OnInit {

  showDialogo(): void {
    const modal = document.getElementById('modal_2');
    modal.classList.remove('hhidden');
    modal.classList.add('sshow');
}
closeDialogo(): void {
    const modal  = document.getElementById('modal_2');
    modal.classList.remove('sshow');
    modal.classList.add('hhidden');
}

  constructor() { }

  ngOnInit(): void {
  }

}

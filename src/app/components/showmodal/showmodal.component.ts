import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showmodal',
  template: ``,
    styleUrls: ['./showmodal.component.scss']
})
export class ShowModalComponent implements OnInit {
    showDialog(): void {
        const modal = document.getElementById('modal_1');
        modal.classList.remove('hhidden');
        modal.classList.add('sshow');
    }
    closeDialog(): void {
        const modal  = document.getElementById('modal_1');
        modal.classList.remove('sshow');
        modal.classList.add('hhidden');
    }

      constructor() { }

  ngOnInit(): void {
  }
}

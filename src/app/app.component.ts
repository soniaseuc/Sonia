import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sonia';

  showDialog(): void {
    const modal = document.getElementById('modal_1');
    modal.classList.remove('hhidden');
    modal.classList.add('sshow');
}

closeDialog(): void {
    const modal = document.getElementById('modal_1');
    modal.classList.remove('sshow');
    modal.classList.add('hhidden');
}

showDialogo(): void {
  const modal = document.getElementById('modal_2');
  modal.classList.remove('hhidden');
  modal.classList.add('sshow');
}

closeDialogo(): void {
  const modal = document.getElementById('modal_2');
  modal.classList.remove('sshow');
  modal.classList.add('hhidden');
}
}

import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sonia';
  open = false;

  template = ['About', 'Our life', 'Projects', 'Team', ' Contact'];

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(DialogElementsExampleDialog);
  }

  openDialogo(): void {
    this.dialog.open(DialogElementsExampleDialogo);
  }

  ngOnInit(): void {
  }

  toggleOpen(): void {
    this.open = !this.open;
  }

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

@Component({
  selector: 'dialog-elements-example-dialog',
  template: `
  <h1 mat-dialog-title>Teléfono:</h1>
  <div mat-dialog-content>+51 994796718</div>
  <div mat-dialog-actions>
    <!-- <button mat-button mat-dialog-close>Close</button> -->
  </div>`,
})
export class DialogElementsExampleDialog {}

@Component({
  selector: 'dialog-elements-example-dialogo',
  template: `
  <h1 mat-dialog-title>Correo:</h1>
  <div mat-dialog-content>sonia.seuc@gmail.com</div>
  <div mat-dialog-actions>
    <!-- <button mat-button mat-dialog-close>Close</button> -->
  </div>`,
})
export class DialogElementsExampleDialogo {}

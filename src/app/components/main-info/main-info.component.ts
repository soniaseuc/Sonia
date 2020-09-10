import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss']
})
export class MainInfoComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(DialogElementsExampleDialog);
  }

  openDialogo(): void {
    this.dialog.open(DialogElementsExampleDialogo);
  }

  ngOnInit(): void {
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

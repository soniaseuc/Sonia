import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

/**
 * @title Dialog elements
 */
@Component({
  selector: 'app-modal-material',
  templateUrl: './modal-material.component.html',
  styleUrls: ['./modal-material.component.scss']
})
export class ModalMaterialComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(DialogElementsExampleDialog);
  }

  ngOnInit(): void {
  }

}




// @Component({
//   selector: 'dialog-elements-example',
//   templateUrl: 'dialog-elements-example.html',
// })
// export class DialogElementsExample {
//   constructor(public dialog: MatDialog) {}


// }


@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {}

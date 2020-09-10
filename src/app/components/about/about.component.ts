// DESABILITADO
import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  // templateUrl: './about.component.html',
  template: `
          <div class="mmodal">
            <div class="mmodal-body">
                <ng-content></ng-content>
            </div>
        </div>
        <div class="mmodal-background"></div>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
     // we added this so that when the backdrop is clicked the modal is closed.
      this.el.nativeElement.addEventListener('click', () => {
      this.close();
  });
  }
  close(): void {
    this.el.nativeElement.classList.remove('sshow');
    this.el.nativeElement.classList.add('hhidden');
}
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pills',
  templateUrl: './pills.component.html',
  styleUrls: ['./pills.component.scss']
})
export class PillsComponent implements OnInit {
  @Input() pills;
  selectedPill: string;
  constructor() { }

  ngOnInit() {
  }

  togglePill(pill) {
    this.selectedPill = pill;
  }
}

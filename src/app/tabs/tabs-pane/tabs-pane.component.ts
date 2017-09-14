import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabs-pane',
  templateUrl: './tabs-pane.component.html',
  styleUrls: ['./tabs-pane.component.scss']
})
export class TabsPaneComponent implements OnInit {
  @Input('title') title: string;
  @Input() active = false;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-accordion-pane',
  templateUrl: './accordion-pane.component.html',
  styleUrls: ['./accordion-pane.component.scss']
})
export class AccordionPaneComponent implements OnInit {

  @Input() active = false;
  @Input('title') title: string;
  @ViewChild(TemplateRef) template;
  constructor() { }

  ngOnInit() {
  }

}
